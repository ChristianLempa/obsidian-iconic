import { AbstractInputSuggest, EditorSuggest, TFile } from 'obsidian';
import IconicPlugin from 'src/IconicPlugin.js';
import IconManager from 'src/managers/IconManager.js';

const FILE_SUGGESTION = 'file';
const TAG_SUGGESTION = 'tag';
const PROPERTY_SUGGESTION = 'property';
const UNKNOWN_SUGGESTION = null;

interface SuggestionValue {
	type?: string;
	file?: TFile;
	tag?: string;
	widget?: unknown;
	text?: string;
	name?: string;
}

interface AbstractInputSuggestWithPrivate<T> extends AbstractInputSuggest<T> {
	showSuggestions: () => void;
}

interface EditorSuggestWithPrivate<T> extends EditorSuggest<T> {
	showSuggestions: () => void;
}

type ShowSuggestionsMethod = () => void;

/**
 * Intercepts suggestion popovers to add custom icons.
 */
export default class SuggestionIconManager extends IconManager {
	private showAbstractSuggestionsOriginal: ShowSuggestionsMethod | null = null;
	private showAbstractSuggestionsProxy: ShowSuggestionsMethod | null = null;
	private renderAbstractSuggestionProxy: typeof AbstractInputSuggest.prototype.renderSuggestion | null = null;

	private showEditorSuggestionsOriginal: ShowSuggestionsMethod | null = null;
	private showEditorSuggestionsProxy: ShowSuggestionsMethod | null = null;
	private renderEditorSuggestionProxy: typeof AbstractInputSuggest.prototype.renderSuggestion | null = null;

	constructor(plugin: IconicPlugin) {
		super(plugin);
		this.setupAbstractSuggestionProxies();
		this.setupEditorSuggestionProxies();
	}

	/**
	 * Intercept property key/value suggestion popovers.
	 */
	private setupAbstractSuggestionProxies(): void {
		const manager = this;

		// Store original method
		const abstractPrototype = AbstractInputSuggest.prototype as AbstractInputSuggestWithPrivate<unknown>;
		this.showAbstractSuggestionsOriginal = abstractPrototype.showSuggestions;

		// Catch popovers before they open
		this.showAbstractSuggestionsProxy = new Proxy(abstractPrototype.showSuggestions, {
			apply(showSuggestions, popover: AbstractInputSuggest<unknown>, args: []) {
				if (manager.isDisabled()) {
					Reflect.apply(showSuggestions, popover, args);
					return;
				}

				// Proxy renderSuggestion() for each instance
				if (popover.renderSuggestion !== manager.renderAbstractSuggestionProxy) {
					manager.renderAbstractSuggestionProxy = new Proxy(popover.renderSuggestion, {
						apply(renderSuggestion, popover: AbstractInputSuggest<unknown>, args: [unknown, HTMLElement]) {
							// Call base method first to pre-populate elements
							Reflect.apply(renderSuggestion, popover, args);
							if (manager.isDisabled()) return;

							const [value, el] = args;
							if (!value || !el.instanceOf(HTMLElement)) return;

							switch (manager.getSuggestionType(value)) {
								case FILE_SUGGESTION: manager.refreshFileIcon(value, el); break;
								case TAG_SUGGESTION: manager.refreshTagIcon(value, el); break;
								case PROPERTY_SUGGESTION: manager.refreshPropertyIcon(value, el); break;
							}

							return;
						}
					});

					// Replace original method
					popover.renderSuggestion = manager.renderAbstractSuggestionProxy;
				}

				Reflect.apply(showSuggestions, popover, args);
				return;
			}
		});

		// Replace original method
		abstractPrototype.showSuggestions = this.showAbstractSuggestionsProxy;
	}

	/**
	 * Intercept editor suggestion popovers.
	 */
	private setupEditorSuggestionProxies(): void {
		const manager = this;

		// Store original method
		const editorPrototype = EditorSuggest.prototype as EditorSuggestWithPrivate<unknown>;
		this.showEditorSuggestionsOriginal = editorPrototype.showSuggestions;

		// Catch popovers before they open
		this.showEditorSuggestionsProxy = new Proxy(editorPrototype.showSuggestions, {
			apply(showSuggestions, popover: EditorSuggest<unknown>, args: []) {
				if (manager.isDisabled()) {
					Reflect.apply(showSuggestions, popover, args);
					return;
				}

				// Proxy renderSuggestion() for each instance
				if (popover.renderSuggestion !== manager.renderEditorSuggestionProxy) {
					manager.renderEditorSuggestionProxy = new Proxy(popover.renderSuggestion, {
						apply(renderSuggestion, popover: EditorSuggest<unknown>, args: [unknown, HTMLElement]) {
							// Call base method first to pre-populate elements
							Reflect.apply(renderSuggestion, popover, args);
							if (manager.isDisabled()) return;

							const [value, el] = args;
							if (!value || !el.instanceOf(HTMLElement)) return;

							switch (manager.getSuggestionType(value)) {
								case FILE_SUGGESTION: manager.refreshFileIcon(value, el); break;
								case TAG_SUGGESTION: manager.refreshTagIcon(value, el); break;
								case PROPERTY_SUGGESTION: manager.refreshPropertyIcon(value, el); break;
							}

							return;
						}
					});

					// Replace original method
					popover.renderSuggestion = manager.renderEditorSuggestionProxy;
				}

				Reflect.apply(showSuggestions, popover, args);
				return;
			}
		});

		// Replace original method
		editorPrototype.showSuggestions = this.showEditorSuggestionsProxy;
	}

	/**
	 * Determine which type of suggestion this is.
	 */
	private getSuggestionType(value: unknown): string | null {
		if (!this.isSuggestionValue(value)) {
			return UNKNOWN_SUGGESTION;
		} else if (value.type === 'file' && value.file instanceof TFile) {
			return FILE_SUGGESTION;
		} else if (value.type === 'alias' && value.file instanceof TFile) {
			return FILE_SUGGESTION;
		} else if (value.tag) {
			return TAG_SUGGESTION;
		} else if (value.widget) {
			return PROPERTY_SUGGESTION;
		} else {
			return UNKNOWN_SUGGESTION;
		}
	}

	private isSuggestionValue(value: unknown): value is SuggestionValue {
		return value !== null && typeof value === 'object';
	}

	/**
	 * Refresh a file suggestion icon.
	 */
	private refreshFileIcon(value: unknown, el: HTMLElement): void {
		if (!this.isSuggestionValue(value)) return;
		const fileId = value.file?.path;
		if (!fileId) return;
		const file = this.plugin.getFileItem(fileId);
		if (!file) return;
		const rule = this.plugin.ruleManager?.checkRuling('file', fileId) ?? file;

		el.addClass('iconic-item');
		const iconContainerEl = el.find(':scope > .suggestion-icon')
			?? createDiv({ cls: 'suggestion-icon' });
		const iconEl = iconContainerEl.find(':scope > .suggestion-flair')
			?? iconContainerEl.createSpan({ cls: 'suggestion-flair' });
		el.prepend(iconContainerEl);
		if (rule) {
			if (!rule.icon && !rule.color) iconEl.addClass('iconic-invisible');
			this.refreshIcon(rule, iconEl);
		}
	}

	/**
	 * Refresh a property suggestion icon.
	 */
	private refreshPropertyIcon(value: unknown, el: HTMLElement): void {
		if (!this.isSuggestionValue(value)) return;
		switch (value.type) {
			// Property suggestions
			case 'text': {
				const propId = value?.text;
				if (propId) {
					const prop = this.plugin.getPropertyItem(propId);
					const iconEl = el.find(':scope > .suggestion-icon > .suggestion-flair');
					if (iconEl) this.refreshIcon(prop, iconEl);
				}
				break;
			}
			// BASES: File attribute suggestions
			case 'file': break;
			// BASES: Formula suggestions
			case 'formula': break;
			// BASES: Property suggestions
			case 'note': {
				const propId = value?.name;
				if (propId) {
					const prop = this.plugin.getPropertyItem(propId);
					const iconEl = el.find(':scope > .suggestion-icon > .suggestion-flair');
					if (iconEl) this.refreshIcon(prop, iconEl);
				}
				break;
			}
		}
	}

	/**
	 * Refresh a tag suggestion icon.
	 */
	private refreshTagIcon(value: unknown, el: HTMLElement): void {
		if (!this.isSuggestionValue(value)) return;
		const tagId = value.tag;
		if (tagId) {
			el.addClass('mod-complex', 'iconic-item');
			const tag = this.plugin.getTagItem(tagId);
			const iconContainerEl = el.find(':scope > .suggestion-icon')
				?? createDiv({ cls: 'suggestion-icon' });
			const iconEl = iconContainerEl.find(':scope > .suggestion-flair')
				?? iconContainerEl.createSpan({ cls: 'suggestion-flair' });
			el.prepend(iconContainerEl);
			if (tag) {
				tag.iconDefault = 'lucide-tag';
				if (!tag.icon && !tag.color) iconEl.addClass('iconic-invisible');
				this.refreshIcon(tag, iconEl);
			}
		}
	}

	/**
	 * Check whether user has disabled suggestion icons.
	 */
	private isDisabled(): boolean {
		return !this.plugin.settings.showSuggestionIcons;
	}

	/**
	 * @override
	 */
	unload(): void {
		super.unload();

		const abstractPrototype = AbstractInputSuggest.prototype as AbstractInputSuggestWithPrivate<unknown>;
		if (this.showAbstractSuggestionsOriginal && abstractPrototype.showSuggestions === this.showAbstractSuggestionsProxy) {
			abstractPrototype.showSuggestions = this.showAbstractSuggestionsOriginal;
		}

		const editorPrototype = EditorSuggest.prototype as EditorSuggestWithPrivate<unknown>;
		if (this.showEditorSuggestionsOriginal && editorPrototype.showSuggestions === this.showEditorSuggestionsProxy) {
			editorPrototype.showSuggestions = this.showEditorSuggestionsOriginal;
		}
	}
}
