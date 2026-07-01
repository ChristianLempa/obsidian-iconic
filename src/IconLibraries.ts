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

function decodeIconData(): SerializedIconDefinition[] {
	const binary = activeWindow.atob(COMPRESSED_ICON_LIBRARY_DATA);
	const compressed = Uint8Array.from(binary, (char: string) => char.charCodeAt(0));
	return JSON.parse(strFromU8(inflateSync(compressed))) as SerializedIconDefinition[];
}

function iconToSvg(body: string, dimensions: IconDimensions): string {
	const [left, top, width, height] = dimensions || [0, 0, 16, 16];
	return `<svg role="img" viewBox="${left} ${top} ${width} ${height}" xmlns="http://www.w3.org/2000/svg" fill="currentColor">${body}</svg>`;
}

function getLibrary(id: string): LibraryId {
	return id.startsWith('simple-') ? 'simple' : 'devicon';
}

const ALL_LIBRARY_ICONS: IconDefinition[] = decodeIconData().map(([id, name, body, dimensions]) => ({
	id,
	name,
	library: getLibrary(id),
	svg: iconToSvg(body, dimensions),
}));

export const SIMPLE_ICONS: IconDefinition[] = ALL_LIBRARY_ICONS.filter(icon => icon.library === 'simple');
export const DEVICONS: IconDefinition[] = ALL_LIBRARY_ICONS.filter(icon => icon.library === 'devicon');

/**
 * Register all additional third-party icon library icons.
 * All SVG data is generated from package data, not hand-written custom SVGs.
 */
export function registerIconLibraries(): void {
	for (const icon of ALL_LIBRARY_ICONS) {
		addIcon(icon.id, icon.svg);
	}
}

/**
 * Populate Iconic's search index with all third-party icon library icons.
 */
export function populateLibraryIcons(ICONS: Map<string, string>): void {
	for (const icon of ALL_LIBRARY_ICONS) {
		ICONS.set(icon.id, icon.name);
	}
}

/**
 * Check if an ID belongs to a third-party icon library.
 */
export function isLibraryIcon(id: string): boolean {
	return id.startsWith('devicon-') || id.startsWith('simple-');
}
