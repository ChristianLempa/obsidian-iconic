import { Menu, MenuItem, MenuPositionDef } from 'obsidian';

interface MenuItemWithSection extends MenuItem {
	section?: string;
}

type ShowAtPositionMethod = (this: Menu, position: MenuPositionDef, doc?: Document) => Menu;

function getMenuItems(menu: Menu): MenuItemWithSection[] {
	const items = Reflect.get(menu, 'items');
	return Array.isArray(items)
		? items.filter((item): item is MenuItemWithSection => item instanceof MenuItem)
		: [];
}

function getMenuSections(menu: Menu): unknown[] {
	const sections = Reflect.get(menu, 'sections');
	return Array.isArray(sections) ? sections : [];
}

/**
 * Intercepts context menus to add custom items.
 */
export default class MenuManager {
	private menu: Menu | null = null;
	private queuedActions: (() => void)[] = [];
	private showAtPositionOriginal: ShowAtPositionMethod;
	private showAtPositionProxy: ShowAtPositionMethod;

	constructor() {
		const menuPrototype = Menu.prototype;

		// Store original method. Use Reflect.get to avoid capturing a method through
		// property access; the proxy still receives the concrete Menu instance.
		this.showAtPositionOriginal = Reflect.get(menuPrototype, 'showAtPosition');

		// Catch menus as they open
		this.showAtPositionProxy = new Proxy(this.showAtPositionOriginal, {
			apply: (showAtPosition, menu: Menu, args: [position: MenuPositionDef, doc?: Document]) => {
				this.menu = menu;
				if (this.queuedActions.length > 0) {
					this.runQueuedActions(); // Menu is unhappy with your customer service
				}
				return Reflect.apply(showAtPosition, menu, args);
			}
		});

		// Replace original method
		menuPrototype.showAtPosition = this.showAtPositionProxy;
	}

	/**
	 * Run all actions in the queue.
	 */
	private runQueuedActions(): void {
		const actions = this.queuedActions;
		this.queuedActions = []; // Reassign property to avoid an infinite loop
		for (const action of actions) action();
	}

	/**
	 * Add a menu item.
	 */
	addItem(callback: (item: MenuItem) => void): this {
		if (this.menu) {
			this.menu.addItem(callback);
		} else {
			this.queuedActions.push(() => this.addItem(callback));
		}
		return this;
	}

	/**
	 * Add a menu item after the given sections, prioritized by array order.
	 */
	addItemAfter(preSections: string | string[], callback: (item: MenuItem) => void): this {
		if (this.menu) {
			if (typeof preSections === 'string') preSections = [preSections];

			this.menu.addItem((item: MenuItemWithSection) => {
				callback(item);
				const section = item.section ?? '';
				const sections = getMenuSections(this.menu!);

				let index = 0;
				for (const preSection of preSections) {
					if (sections.includes(preSection)) {
						index = sections.lastIndexOf(preSection) + 1;
						break;
					}
				}
				sections.remove(section);
				sections.splice(index, 0, section);
			});
		} else {
			this.queuedActions.push(() => this.addItemAfter(preSections, callback));
		}
		return this;
	}

	/**
	 * Add a separator.
	 */
	addSeparator(): this {
		if (this.menu) {
			this.menu.addSeparator();
		} else {
			this.queuedActions.push(() => this.addSeparator());
		}
		return this;
	}

	/**
	 * Iterate menu items of a given section.
	 */
	forSection(section: string, callback: (item: MenuItem, index: number) => void): this {
		if (this.menu) {
			const items = getMenuItems(this.menu).filter(item => item.section === section);
			items.forEach((item, i) => callback(item, i));
		} else {
			this.queuedActions.push(() => this.forSection(section, callback));
		}
		return this;
	}

	/**
	 * Flush any queued actions from a previous menu.
	 */
	flush(): void {
		this.queuedActions.length = 0;
	}

	/**
	 * Close menu and flush any queued actions.
	 */
	closeAndFlush(): void {
		this.menu?.close();
		this.menu = null;
		this.flush();
	}

	/**
	 * Revert proxy to original method if possible.
	 */
	unload(): void {
		if (Menu.prototype.showAtPosition === this.showAtPositionProxy) {
			Menu.prototype.showAtPosition = this.showAtPositionOriginal;
		}
	}
}
