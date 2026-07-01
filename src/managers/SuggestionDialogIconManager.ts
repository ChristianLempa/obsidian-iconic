import { Instruction, Plugin, SuggestModal, TFile, TFolder, WorkspaceLeaf } from 'obsidian';
import IconicPlugin, { Category, PLUGIN_TAB_TYPES } from 'src/IconicPlugin.js';
import IconManager from 'src/managers/IconManager.js';

type UnknownSuggestModal = SuggestModal<unknown>;
type OnOpenMethod = (this: UnknownSuggestModal) => void | Promise<void>;
type SetInstructionsMethod = (this: UnknownSuggestModal, instructions: Instruction[]) => void;
type RenderSuggestionMethod = (value: unknown, el: HTMLElement) => void;

type PluginModal = UnknownSuggestModal & { plugin: Plugin };
interface BookmarkSuggestionBase {
	type?: Category;
	path?: string;
}
interface SuggestionDialogValue {
	type?: string;
	file?: TFile;
	item?: unknown;
}

interface SuggestModalPrototype<T> extends SuggestModal<T> {
	onOpen: OnOpenMethod;
	setInstructions: SetInstructionsMethod;
}

/**
 * Allow type-safe access to a modal.plugin property.
 */
function isPluginModal(modal: UnknownSuggestModal): modal is PluginModal {
	return (modal as PluginModal).plugin instanceof Plugin;
}

const QUICK_SWITCHER = 'qs';
const QUICK_SWITCHER_PP = 'qs++';
const ANOTHER_QUICK_SWITCHER = 'aqs';
const MOVE_FILE_DIALOG = 'mfd';

/**
 * Intercepts suggestion dialogs like quick switchers and "Move file" dialogs to add custom icons.
 */
export default class SuggestionDialogIconManager extends IconManager {
	private onOpenOriginal: OnOpenMethod;
	private onOpenProxy: OnOpenMethod;
	private setInstructionsOriginal: SetInstructionsMethod;
	private setInstructionsProxy: SetInstructionsMethod;

	constructor(plugin: IconicPlugin) {
		super(plugin);
		const suggestPrototype = SuggestModal.prototype as SuggestModalPrototype<unknown>;

		// Store original methods
		this.onOpenOriginal = suggestPrototype.onOpen;
		this.setInstructionsOriginal = suggestPrototype.setInstructions;

		// Catch Quick Switcher, Quick Switcher++, and "Move file" dialogs
		this.onOpenProxy = new Proxy(this.onOpenOriginal, {
			apply: (onOpen, modal: UnknownSuggestModal, args: []) => {
				if (this.isDisabled()) {
					return Reflect.apply(onOpen, modal, args);
				}

				const modalType = this.getModalType(modal);
				if (!modalType) {
					return Reflect.apply(onOpen, modal, args);
				}

				// Proxy renderSuggestion() for each instance
				const renderSuggestionOriginal: RenderSuggestionMethod = modal.renderSuggestion.bind(modal);
				modal.renderSuggestion = new Proxy(renderSuggestionOriginal, {
					apply: (renderSuggestion, _renderModal, renderArgs: [unknown, HTMLElement]) => {
						// Call base method first to pre-populate elements
						renderSuggestion(...renderArgs);

						switch (modalType) {
							case QUICK_SWITCHER: {
								modal.modalEl.addClass('iconic-prompt');
								this.refreshSuggestionIconQS(...renderArgs);
								break;
							}
							case QUICK_SWITCHER_PP: {
								modal.modalEl.addClass('iconic-prompt');
								this.refreshSuggestionIconQSPP(...renderArgs);
								break;
							}
							case MOVE_FILE_DIALOG: {
								modal.modalEl.addClass('iconic-prompt');
								this.refreshSuggestionIconMFD(...renderArgs);
								break;
							}
						}
					}
				});

				return Reflect.apply(onOpen, modal, args);
			}
		});

		// Catch Another Quick Switcher, which never calls super.onOpen()
		this.setInstructionsProxy = new Proxy(this.setInstructionsOriginal, {
			apply: (setInstructions, modal: UnknownSuggestModal, args: [Instruction[]]) => {
				if (this.isDisabled()) {
					return Reflect.apply(setInstructions, modal, args);
				}

				const modalType = this.getModalType(modal);
				if (modalType !== ANOTHER_QUICK_SWITCHER) {
					return Reflect.apply(setInstructions, modal, args);
				}

				// Proxy renderSuggestion() for every instance
				const renderSuggestionOriginal: RenderSuggestionMethod = modal.renderSuggestion.bind(modal);
				modal.renderSuggestion = new Proxy(renderSuggestionOriginal, {
					apply: (renderSuggestion, _renderModal, renderArgs: [unknown, HTMLElement]) => {
						if (this.isDisabled()) {
							renderSuggestion(...renderArgs);
							return;
						}
						// Call base method first to pre-populate elements
						renderSuggestion(...renderArgs);
						modal.modalEl.addClass('iconic-another-quick-switcher');
						// Refresh suggestions
						this.refreshSuggestionIconAQS(...renderArgs);
					}
				});

				return Reflect.apply(setInstructions, modal, args);
			}
		});

		// Replace original methods
		suggestPrototype.onOpen = this.onOpenProxy;
		suggestPrototype.setInstructions = this.setInstructionsProxy;
	}

	/**
	 * Determine which type of modal this is.
	 */
	private getModalType(modal: UnknownSuggestModal): string | null {
		// Check for Another Quick Switcher
		if (modal.modalEl.hasClass('another-quick-switcher__modal-prompt')) {
			return ANOTHER_QUICK_SWITCHER;
		}

		// Check for Quick Switcher++
		if (isPluginModal(modal) && modal.plugin.manifest.id === 'darlal-switcher-plus') {
			return QUICK_SWITCHER_PP;
		}

		// Check for Quick Switcher
		if ('shouldShowMarkdown' in modal) {
			return QUICK_SWITCHER;
		}

		// Check for "Move file" dialog
		if ('files' in modal && 'emptyMatch' in modal) {
			return MOVE_FILE_DIALOG;
		}

		return null;
	}

	/**
	 * Refresh icon of a Quick Switcher suggestion.
	 */
	private refreshSuggestionIconQS(value: unknown, el: HTMLElement): void {
		if (!this.isSuggestionDialogValue(value)) return;
		switch (value.type) {
			case 'alias': // Fallthrough
			case 'file': {
				if (value.file instanceof TFile) {
					const file = this.plugin.getFileItem(value.file.path);
					const rule = this.plugin.ruleManager?.checkRuling('file', file.id) ?? file;
					if (rule.icon || rule.color) {
						const iconEl = el.find('.iconic-icon') ?? el.createDiv();
						el.prepend(iconEl);
						this.refreshIcon(rule, iconEl);
					}
				}
				break;
			}
			case 'bookmark': {
				const bmarkBase = this.getBookmarkBase(value.item);
				if (bmarkBase?.type === 'file' && bmarkBase.path) {
					const file = this.plugin.getFileItem(bmarkBase.path);
					const rule = this.plugin.ruleManager?.checkRuling('file', file.id) ?? file;
					if (rule.icon || rule.color) {
						const iconEl = el.find('.iconic-icon') ?? el.createDiv();
						this.refreshIcon(rule, iconEl);
					}
				}
				break;
			}
		}
	}

	/**
	 * Refresh icon of a Quick Switcher++ suggestion.
	 */
	private refreshSuggestionIconQSPP(value: unknown, el: HTMLElement): void {
		if (!this.isSuggestionDialogValue(value)) return;
		switch (value.type) {
			case 'relatedItemsList': // Fallthrough
			case 'file': {
				if (value.file instanceof TFile) {
					const file = this.plugin.getFileItem(value.file.path);
					const rule = this.plugin.ruleManager?.checkRuling('file', file.id) ?? file;
					if (rule.icon || rule.color) {
						const iconEl = el.find('.iconic-icon') ?? el.createDiv();
						el.prepend(iconEl);
						this.refreshIcon(rule, iconEl);
					}
				}
				break;
			}
			case 'bookmark': {
				const bmarkBase = this.getBookmarkBase(value.item);
				if ((bmarkBase?.type === 'file' || bmarkBase?.type === 'folder') && bmarkBase.path) {
					const file = this.plugin.getFileItem(bmarkBase.path);
					const rule = this.plugin.ruleManager?.checkRuling(bmarkBase.type, file.id) ?? file;
					if (rule.icon || rule.color) {
						const iconEl = el.find('.iconic-icon') ?? el.createDiv();
						el.prepend(iconEl);
						this.refreshIcon(rule, iconEl);
					}
				}
				break;
			}
			case 'editorList': { // Represents an open tab in Editor Mode
				if (!(value.item instanceof WorkspaceLeaf)) break;
				const tabType = value.item.view.getViewType();
				const iconDefault = value.item.view.getIcon();

				// Distinguish between file tabs and plugin tabs
				if (!PLUGIN_TAB_TYPES.includes(tabType) && value.file instanceof TFile) {
					const file = this.plugin.getFileItem(value.file.path);
					const rule = this.plugin.ruleManager?.checkRuling('file', file.id) ?? file;
					if (rule.icon || rule.color) {
						const iconEl = el.find('.iconic-icon') ?? el.createDiv();
						el.prepend(iconEl);
						this.refreshIcon(rule, iconEl);
					}
				} else {
					const tab = this.plugin.getTabItem(tabType);
					if (tab) {
						tab.iconDefault = iconDefault;
						const iconEl = el.find('.iconic-icon') ?? el.createDiv();
						el.prepend(iconEl);
						this.refreshIcon(tab, iconEl);
					}
				}
				break;
			}
		}
	}

	/**
	 * Refresh icon of Another Quick Switcher suggestion.
	 */
	private refreshSuggestionIconAQS(value: unknown, el: HTMLElement): void {
		if (!this.isSuggestionDialogValue(value)) return;
		const tFile = value.file;
		if (!(tFile instanceof TFile)) return;

		const itemEl = el.find('.another-quick-switcher__item');
		const file = this.plugin.getFileItem(tFile.path);
		const rule = this.plugin.ruleManager?.checkRuling('file', file.id) ?? file;

		if (rule.icon || rule.color) {
			const iconEl = itemEl.find('.iconic-icon') ?? itemEl.createDiv();
			itemEl.prepend(iconEl);
			this.refreshIcon(rule, iconEl);
		}
	}

	/**
	 * Refresh icon of a "Move file" dialog suggestion.
	 */
	private refreshSuggestionIconMFD(value: unknown, el: HTMLElement): void {
		if (!this.isSuggestionDialogValue(value)) return;
		const tFolder = value.item;
		if (!(tFolder instanceof TFolder)) return;

		el.addClass('mod-complex');
		const contentEl = el.createDiv({ cls: 'suggestion-content' });
		const titleEl = contentEl.createDiv({ cls: 'suggestion-title '});

		// Move text nodes and .suggestion-highlights into .suggestion-title
		for (const node of [...el.childNodes]) {
			if (node !== contentEl) titleEl.append(node);
		}

		const folder = this.plugin.getFileItem(tFolder.path);
		const rule = this.plugin.ruleManager?.checkRuling('folder', folder.id) ?? folder;

		if (rule.icon || rule.color) {
			const iconEl = el.find('.iconic-icon') ?? el.createDiv();
			el.prepend(iconEl);
			this.refreshIcon(rule, iconEl);
		}
	}

	private isSuggestionDialogValue(value: unknown): value is SuggestionDialogValue {
		return value !== null && typeof value === 'object';
	}

	private getBookmarkBase(item: unknown): BookmarkSuggestionBase | null {
		if (!item || typeof item !== 'object') return null;
		const record = item as Record<string, unknown>;
		return {
			type: typeof record.type === 'string' ? record.type as Category : undefined,
			path: typeof record.path === 'string' ? record.path : undefined,
		};
	}

	/**
	 * Check whether user has disabled all suggestion dialog icons.
	 */
	private isDisabled(): boolean {
		return !this.plugin.settings.showQuickSwitcherIcons && !this.plugin.settings.showMoveFileIcons;
	}

	/**
	 * @override
	 */
	unload(): void {
		super.unload();
		const suggestPrototype = SuggestModal.prototype as SuggestModalPrototype<unknown>;
		if (suggestPrototype.onOpen === this.onOpenProxy) {
			suggestPrototype.onOpen = this.onOpenOriginal;
		}
		if (suggestPrototype.setInstructions === this.setInstructionsProxy) {
			suggestPrototype.setInstructions = this.setInstructionsOriginal;
		}
	}
}
