import { addIcon } from 'obsidian';
import { icons as simpleIconsData } from '@iconify-json/simple-icons';
import { icons as deviconData } from '@iconify-json/devicon';
import { icons as selfhstData } from '@iconify-json/selfhst';
import type { IconifyJSON, IconifyIcon } from '@iconify/types';

export type LibraryId = 'simple' | 'devicon' | 'selfhst';

export interface IconDefinition {
	id: string;
	name: string;
	svg: string;
	library: LibraryId;
}

interface IconLibrarySource {
	library: LibraryId;
	idPrefix: string;
	label: string;
	data: IconifyJSON;
}

const LIBRARIES: IconLibrarySource[] = [
	{
		library: 'simple',
		idPrefix: 'simple',
		label: 'Simple Icons',
		data: simpleIconsData,
	},
	{
		library: 'devicon',
		idPrefix: 'devicon',
		label: 'Devicon',
		data: deviconData,
	},
	{
		library: 'selfhst',
		idPrefix: 'selfhst',
		label: 'selfh.st',
		data: selfhstData,
	},
];

function titleFromSlug(slug: string): string {
	return slug
		.replace(/[-_]+/g, ' ')
		.replace(/\b\w/g, char => char.toUpperCase())
		.replace(/\bJs\b/g, 'JS')
		.replace(/\bCss\b/g, 'CSS')
		.replace(/\bHtml\b/g, 'HTML')
		.replace(/\bApi\b/g, 'API')
		.replace(/\bUi\b/g, 'UI')
		.replace(/\bOs\b/g, 'OS')
		.replace(/\bDb\b/g, 'DB')
		.trim();
}

function resolveIcon(data: IconifyJSON, name: string, seen = new Set<string>()): IconifyIcon | null {
	if (seen.has(name)) return null;
	seen.add(name);

	const direct = data.icons[name];
	if (direct) return direct;

	const alias = data.aliases?.[name];
	if (!alias?.parent) return null;

	const parent = resolveIcon(data, alias.parent, seen);
	if (!parent) return null;

	return {
		...parent,
		...alias,
		body: parent.body,
		width: alias.width ?? parent.width,
		height: alias.height ?? parent.height,
		left: alias.left ?? parent.left,
		top: alias.top ?? parent.top,
	};
}

function forceCurrentColor(svgBody: string): string {
	return svgBody
		// Replace explicit fill/stroke colors, while preserving fill="none" and stroke="none".
		.replace(/\s(fill|stroke)="(?!none\b|currentColor\b)[^"]*"/gi, ' $1="currentColor"')
		// Replace inline CSS fill/stroke colors, while preserving none/currentColor.
		.replace(/(fill|stroke)\s*:\s*(?!none\b|currentColor\b)[^;"']+/gi, '$1:currentColor');
}

function iconToSvg(data: IconifyJSON, icon: IconifyIcon): string {
	const left = icon.left ?? 0;
	const top = icon.top ?? 0;
	const width = icon.width ?? data.width ?? 16;
	const height = icon.height ?? data.height ?? 16;
	const body = forceCurrentColor(icon.body);

	return `<svg role="img" viewBox="${left} ${top} ${width} ${height}" xmlns="http://www.w3.org/2000/svg" fill="currentColor">${body}</svg>`;
}

function buildLibraryIcons(source: IconLibrarySource): IconDefinition[] {
	const ids = new Set<string>([
		...Object.keys(source.data.icons),
		...Object.keys(source.data.aliases ?? {}),
	]);

	return [...ids]
		.sort((a, b) => a.localeCompare(b))
		.map((id): IconDefinition | null => {
			const icon = resolveIcon(source.data, id);
			if (!icon?.body) return null;

			const name = titleFromSlug(id);
			return {
				id,
				name: `${source.label}: ${name}`,
				library: source.library,
				svg: iconToSvg(source.data, icon),
			};
		})
		.filter((icon): icon is IconDefinition => icon !== null);
}

const LIBRARY_ICONS = new Map<LibraryId, IconDefinition[]>();
for (const source of LIBRARIES) {
	LIBRARY_ICONS.set(source.library, buildLibraryIcons(source));
}

export const SIMPLE_ICONS: IconDefinition[] = LIBRARY_ICONS.get('simple') ?? [];
export const DEVICONS: IconDefinition[] = LIBRARY_ICONS.get('devicon') ?? [];
export const SELFHOST_ICONS: IconDefinition[] = LIBRARY_ICONS.get('selfhst') ?? [];
export const ALL_LIBRARY_ICONS: IconDefinition[] = [...SIMPLE_ICONS, ...DEVICONS, ...SELFHOST_ICONS];

/**
 * Register all additional third-party icon library icons with Obsidian.
 * All SVG data is generated from package data, not hand-written custom SVGs.
 */
export function registerIconLibraries(): void {
	for (const icon of ALL_LIBRARY_ICONS) {
		const source = LIBRARIES.find(library => library.library === icon.library);
		if (!source) continue;
		addIcon(`${source.idPrefix}-${icon.id}`, icon.svg);
	}
}

/**
 * Populate Iconic's search index with all third-party icon library icons.
 */
export function populateLibraryIcons(ICONS: Map<string, string>): void {
	for (const icon of ALL_LIBRARY_ICONS) {
		const source = LIBRARIES.find(library => library.library === icon.library);
		if (!source) continue;
		ICONS.set(`${source.idPrefix}-${icon.id}`, icon.name);
	}
}

/**
 * Check if an ID belongs to a third-party icon library.
 */
export function isLibraryIcon(id: string): boolean {
	return id.startsWith('devicon-') || id.startsWith('selfhst-') || id.startsWith('simple-');
}
