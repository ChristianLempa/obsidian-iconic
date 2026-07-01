import { addIcon } from 'obsidian';
import { inflateSync, strFromU8 } from 'fflate';
import { COMPRESSED_ICON_LIBRARY_DATA } from 'src/generated/IconLibraryData.js';

export type LibraryId = 'simple' | 'devicon';

type IconDimensions = 0 | [left: number, top: number, width: number, height: number];
type SerializedIconDefinition = [id: string, name: string, body: string, dimensions: IconDimensions];

export interface IconDefinition {
	id: string;
	name: string;
	svg: string;
	library: LibraryId;
}

let cachedLibraryIcons: IconDefinition[] | null = null;
let registeredAllLibraryIcons = false;
const registeredLibraryIconIds = new Set<string>();

function decodeIconData(): SerializedIconDefinition[] {
	const binary = activeWindow.atob(COMPRESSED_ICON_LIBRARY_DATA);
	const compressed = Uint8Array.from(binary, (char: string) => char.charCodeAt(0));
	return JSON.parse(strFromU8(inflateSync(compressed))) as SerializedIconDefinition[];
}

function getLibrary(id: string): LibraryId {
	return id.startsWith('simple-') ? 'simple' : 'devicon';
}

function iconToSvg(id: string, body: string, dimensions: IconDimensions): string {
	const defaultSize = getLibrary(id) === 'simple' ? 24 : 128;
	const [left, top, width, height] = dimensions || [0, 0, defaultSize, defaultSize];
	return `<svg role="img" viewBox="${left} ${top} ${width} ${height}" xmlns="http://www.w3.org/2000/svg" fill="currentColor">${body}</svg>`;
}

function getLibraryIcons(): IconDefinition[] {
	cachedLibraryIcons ??= decodeIconData().map(([id, name, body, dimensions]) => ({
		id,
		name,
		library: getLibrary(id),
		svg: iconToSvg(id, body, dimensions),
	}));
	return cachedLibraryIcons;
}

function toIdFilter(ids?: Iterable<string>): Set<string> | null {
	if (!ids) return null;
	const idSet = new Set([...ids].filter(isLibraryIcon));
	return idSet.size > 0 ? idSet : null;
}

/**
 * Register additional third-party icon library icons.
 * All SVG data is generated from package data, not hand-written custom SVGs.
 */
export function registerIconLibraries(ids?: Iterable<string>): void {
	if (!ids && registeredAllLibraryIcons) return;
	const idFilter = toIdFilter(ids);
	if (ids && !idFilter) return;
	for (const icon of getLibraryIcons()) {
		if (idFilter && !idFilter.has(icon.id)) continue;
		if (registeredAllLibraryIcons || registeredLibraryIconIds.has(icon.id)) continue;
		addIcon(icon.id, icon.svg);
		registeredLibraryIconIds.add(icon.id);
	}
	if (!ids) registeredAllLibraryIcons = true;
}

/**
 * Populate Iconic's search index with third-party icon library icons.
 */
export function populateLibraryIcons(ICONS: Map<string, string>, ids?: Iterable<string>): void {
	const idFilter = toIdFilter(ids);
	if (ids && !idFilter) return;
	for (const icon of getLibraryIcons()) {
		if (!idFilter || idFilter.has(icon.id)) ICONS.set(icon.id, icon.name);
	}
}

/**
 * Check if an ID belongs to a third-party icon library.
 */
export function isLibraryIcon(id: string): boolean {
	return id.startsWith('devicon-') || id.startsWith('simple-');
}
