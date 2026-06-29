/**
 * Additional icon libraries for the customized Iconic fork.
 * 
 * Icons are registered via Obsidian's addIcon() so they integrate
 * seamlessly with setIcon() and the rest of the plugin.
 * 
 * IDs use prefixes:
 *  - devicon-*
 *  - selfhst-*
 */

import { addIcon } from 'obsidian';

/**
 * Devicon entry: id (without prefix), display name, raw SVG string.
 */
export interface IconDefinition {
	id: string;
	name: string;
	svg: string;
}

/**
 * Starter set of popular Devicons.
 * SVGs sourced from https://github.com/devicons/devicon (simplified for size).
 * More can be added easily.
 */
export const DEVICONS: IconDefinition[] = [
	{
		id: 'react',
		name: 'React',
		svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><g fill="#61DAFB"><circle cx="64" cy="64" r="11.4"/><path d="M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3.6-2.4 1.1-4.8 1.5-7.1 2.1-13.2-.2-22.5-6.6-26.1-1.9-1.1-4-1.6-6.4-1.6-7 0-15.9 5.2-24.9 13.9-9-8.7-17.9-13.9-24.9-13.9-2.4 0-4.5.5-6.4 1.6-6.4 3.7-8.7 13-6.6 26.1.4 2.3.9 4.7 1.5 7.1-2.4.7-4.7 1.4-6.9 2.3C8.2 50 1.4 56.6 1.4 64s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3-.6 2.4-1.1 4.8-1.5 7.1-2.1 13.2.2 22.5 6.6 26.1 1.9 1.1 4 1.6 6.4 1.6 7.1 0 16-5.2 24.9-13.9 9 8.7 17.9 13.9 24.9 13.9 2.4 0 4.5-.5 6.4-1.6 6.4-3.7 8.7-13 6.6-26.1-.4-2.3-.9-4.7-1.5-7.1 2.4-.7 4.7-1.4 6.9-2.3 12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8zM92.5 14.7c4.1 2.4 5.5 9.8 3.8 20.3-.3 2.1-.8 4.3-1.4 6.6-5.2-1.2-10.7-2-16.5-2.5-3.4-4.8-6.9-9.1-10.4-13 7.4-7.3 14.9-10.5 20.9-10.5 2.6 0 4.3.5 5.5 1.4 1.3.8 2 2.4 2.1 4.5zM27.1 35.7c3.6 4 7.1 8.5 10.4 13.4-5.8.5-11.6 1.4-17.1 2.7-.6-2.3-1-4.6-1.4-6.8-1.6-10.2-.3-17.5 3.6-19.9 1.1-.7 2.6-1 4.5-1 4.9 0 11.4 2.8 17.8 8.6zM14.3 76.7c1.6 10.3 5.6 17 10.2 18.9 1.3.5 2.7.8 4.3.8 5.9 0 13.4-3.6 20.9-10.5-3.3 4.9-6.9 9.4-10.5 13.4-5.8-.6-11.3-1.4-16.6-2.6-.6-2.3-1-4.7-1.4-7.1-1.6-10.3.1-17.6 3.5-19.9.8-.5 1.9-.8 3.3-.8 2.9 0 6.8 1.4 10.9 3.8zM64 92.4c-7.4 0-14.3-2.3-19.8-6.3 1.8 3.1 3.8 6 6 8.6 5.5 6.4 12.2 10.1 19.1 10.1 6.9 0 13.5-3.7 19-10.1 2.2-2.6 4.2-5.5 6-8.6-5.5 4-12.4 6.3-19.9 6.3zM109.7 76.7c-1.6 10.3-5.6 17-10.2 18.9-1.3.5-2.7.8-4.3.8-5.9 0-13.4-3.6-20.9-10.5 3.3 4.9 6.9 9.4 10.5 13.4 5.8-.6 11.3-1.4 16.6-2.6.6-2.3 1-4.7 1.4-7.1 1.5-10.3-.1-17.6-3.5-19.9-.8-.5-1.9-.8-3.3-.8-2.9 0-6.8 1.4-10.9 3.8zM114 64c0 2.4-1.4 4.7-3.9 6.8-2.2 1.9-5.2 3.5-8.7 4.7-3.5 1.2-7.5 2-11.8 2.4-.4-2.4-.9-4.8-1.5-7.1 3.1-.7 6-1.6 8.5-2.7 5.5-2.4 8.4-5 8.4-6.9 0-1.9-2.9-4.5-8.4-6.9-2.5-1.1-5.4-2-8.5-2.7.6-2.3 1.1-4.7 1.5-7.1 4.3.4 8.3 1.2 11.8 2.4 3.5 1.2 6.5 2.8 8.7 4.7 2.5 2.1 3.9 4.4 3.9 6.8z"/></g></svg>'
	},
	{
		id: 'typescript',
		name: 'TypeScript',
		svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><rect width="128" height="128" rx="12" fill="#3178C6"/><path fill="#fff" d="M40 95V33h17v24h.4l16.7-24H92L71 62l23 33H73l-15-22.5L40 95zM82 95l-15-21.5L52 95H35L58 62 36 33h17.3l14.4 21L82 33h16L75.6 62 99 95H82z"/></svg>'
	},
	{
		id: 'javascript',
		name: 'JavaScript',
		svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><rect width="128" height="128" rx="12" fill="#F7DF1E"/><path d="M38 95l9-5c2 3.5 4 6 8 6 3.5 0 5.5-1.5 5.5-4 0-3-2-4-7-6l-2-.5c-6-2-10-5-10-11 0-6 5-10.5 13-10.5 6 0 10.5 2 13.5 7l-8 5c-1.5-2.5-3-3.5-5.5-3.5-2.5 0-4 1-4 3 0 2 1.5 3 5 4.5l2 .5c7 1.5 12 4 12 11 0 7-5 11-14 11-7 0-12-2.5-15.5-8zm35 1l9-5c2 4 4 7 9 7 3.5 0 5.5-1.5 5.5-3.5 0-2.5-2-3.5-7-5.5l-2-.5c-7-2-11.5-5.5-11.5-12 0-6.5 5-11 13.5-11 6 0 10 2 13 6.5l-8 5c-1.5-2-3-3-5.5-3-2.5 0-4 .5-4 3 0 2 1.5 3 5.5 4.5l2 .5c7 1.5 11.5 4 11.5 11 0 7-5 11.5-13.5 11.5-7 0-12-2-15.5-7.5z" fill="#000"/></svg>'
	},
	{
		id: 'python',
		name: 'Python',
		svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><linearGradient id="a" x1="64" x2="64" y1="22" y2="107" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#387EB8"/><stop offset="1" stop-color="#366994"/></linearGradient><linearGradient id="b" x1="64" x2="64" y1="21" y2="106" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#FFE052"/><stop offset="1" stop-color="#FFC331"/></linearGradient><path fill="url(#a)" d="M63.4 22c-17.7 0-23 8-23 8l.3 8.3h24v2.5H31.7s-14.6 1.3-14.6 22.4 12.7 23 12.7 23h7.6v-11s-.4-12.7 12.4-12.7h21.4s12 0 12 10.7v18.7s0 10.7-12 10.7H50.3s-8.4.2-8.4 8.4v14.6s-1 8.4 13.3 8.4c14.3 0 22-8 22-8l.2-7.8H55.4v-2.5h29.5s14.2-1.3 14.2-21.7-12.3-23.3-12.3-23.3h-7.6v10.7s.5 12.7-12.4 12.7H46.2s-12.2-.3-12.2-11V46s0-11 12-11h13.5s7.7-.3 7.7-8.3V30s-.2-8-12-8z"/><path fill="url(#b)" d="M65.4 106c17.7 0 23-8 23-8l-.3-8.3H64v-2.5h33.3s14.6-1.3 14.6-22.4-12.7-23-12.7-23h-7.6v11s.4 12.7-12.4 12.7H57.7s-12 0-12-10.7V33.5s0-10.7 12-10.7h13.5s8.4-.2 8.4-8.4V10s1-8.4-13.3-8.4c-14.3 0-22 8-22 8l-.2 7.8h21.4v2.5H42.8s-14.2 1.3-14.2 21.7 12.3 23.3 12.3 23.3h7.6v-10.7s-.5-12.7 12.4-12.7h21.4s12.2.3 12.2 11V82s0 11-12 11H58.5s-7.7.3-7.7 8.3v7.7s.2 8 12 8z"/></svg>'
	},
	{
		id: 'docker',
		name: 'Docker',
		svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><path fill="#2396ED" d="M126.7 55.3c-1-1.2-2.8-1.8-4.7-1.6l-19.3 3.1-3.7-10.9c-.6-1.7-2-2.8-3.7-2.8H24.7c-2 0-3.7 1.5-3.7 3.5v.7l2.3 10.3c-3.4.4-6 3-6 6.5 0 .3 0 .6.1.9l3.4 15.7c.4 1.7 1.9 2.9 3.7 2.9h70.2c1.6 0 3-1 3.5-2.5l12.3-36.1c.4-1.2.2-2.5-.6-3.5zM24.7 77.5c-1.2 0-2.2-1-2.2-2.2s1-2.2 2.2-2.2 2.2 1 2.2 2.2-1 2.2-2.2 2.2zm8.6 0c-1.2 0-2.2-1-2.2-2.2s1-2.2 2.2-2.2 2.2 1 2.2 2.2-1 2.2-2.2 2.2zm8.6 0c-1.2 0-2.2-1-2.2-2.2s1-2.2 2.2-2.2 2.2 1 2.2 2.2-1 2.2-2.2 2.2zm-17.2-8.7c-1.2 0-2.2-1-2.2-2.2s1-2.2 2.2-2.2 2.2 1 2.2 2.2-1 2.2-2.2 2.2zm8.6 0c-1.2 0-2.2-1-2.2-2.2s1-2.2 2.2-2.2 2.2 1 2.2 2.2-1 2.2-2.2 2.2zm8.6 0c-1.2 0-2.2-1-2.2-2.2s1-2.2 2.2-2.2 2.2 1 2.2 2.2-1 2.2-2.2 2.2zm8.6 0c-1.2 0-2.2-1-2.2-2.2s1-2.2 2.2-2.2 2.2 1 2.2 2.2-1 2.2-2.2 2.2zm8.6 0c-1.2 0-2.2-1-2.2-2.2s1-2.2 2.2-2.2 2.2 1 2.2 2.2-1 2.2-2.2 2.2zm8.6 0c-1.2 0-2.2-1-2.2-2.2s1-2.2 2.2-2.2 2.2 1 2.2 2.2-1 2.2-2.2 2.2z"/></svg>'
	},
	{
		id: 'nodejs',
		name: 'Node.js',
		svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><path fill="#83CD29" d="M64 0L18.7 26.7v53.3L64 106.7l45.3-26.7V26.7L64 0zm0 10.7L99.2 30v48L64 92.3 28.8 78V30L64 10.7z"/><path fill="#43853D" d="M64 21.3l-26.7 15.4v30.7l26.7 15.3 26.7-15.3V36.7L64 21.3z"/><path fill="#83CD29" d="M64 35.7l-10.7 6.1v12.3l10.7 6.1 10.7-6.1V41.8L64 35.7z"/></svg>'
	},
	{
		id: 'github',
		name: 'GitHub',
		svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><path fill="#181717" d="M64 5.1C30.4 5.1 3 32.5 3 66.1c0 26.9 17.4 49.7 41.5 57.7 3 .6 4.1-1.3 4.1-2.9 0-1.4-.1-6.1-.1-11-16.9 3.7-20.5-7.2-20.5-7.2-2.8-7-6.8-8.9-6.8-8.9-5.5-3.8.4-3.7.4-3.7 6.1.4 9.3 6.3 9.3 6.3 5.4 9.2 14.2 6.5 17.7 5 .5-3.9 2.1-6.5 3.8-8-13.5-1.5-27.7-6.7-27.7-30 0-6.6 2.4-12 6.3-16.2-.6-1.5-2.7-7.7.6-16 0 0 5.1-1.6 16.8 6.2 4.9-1.4 10.1-2 15.3-2 5.2 0 10.4.7 15.3 2 11.6-7.8 16.7-6.2 16.7-6.2 3.3 8.3 1.2 14.5.6 16 3.9 4.2 6.3 9.6 6.3 16.2 0 23.3-14.2 28.5-27.8 30 2.2 1.9 4.1 5.5 4.1 11.1 0 8-.1 14.4-.1 16.4 0 1.6 1.1 3.5 4.1 2.9 24.1-8 41.5-30.8 41.5-57.7C125 32.5 97.6 5.1 64 5.1z"/></svg>'
	}
];

/**
 * Starter set of popular selfh.st icons.
 * SVGs from https://github.com/selfhst/icons (cdn.jsdelivr.net)
 */
export const SELFHOST_ICONS: IconDefinition[] = [
	{
		id: 'nextcloud',
		name: 'Nextcloud',
		svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M512 80v352c0 44.2-35.8 80-80 80H80c-44.2 0-80-35.8-80-80V80C0 35.8 35.8 0 80 0h352c44.2 0 80 35.8 80 80" style="fill:#0082c9"/><path d="M256 167.2c-40.3 0-74.5 27.2-85.3 64.2-9.3-19.4-29-33-51.8-33-31.6-.1-57.6 25.9-57.6 57.6s26 57.6 57.6 57.6c22.8 0 42.5-13.6 51.8-33 10.8 36.9 45 64.2 85.3 64.2s74.5-27.2 85.3-64.2c9.3 19.4 29 33 51.8 33 31.6 0 57.6-26 57.6-57.6s-25.8-57.6-57.6-57.6c-22.8 0-42.5 13.6-51.8 33-10.8-36.9-45-64.2-85.3-64.2z" fill="#fff"/></svg>'
	},
	{
		id: 'jellyfin',
		name: 'Jellyfin',
		svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#00A4DC" d="M256 32L32 112v288l224 80 224-80V112L256 32zm0 48l160 57v190l-160 57-160-57V137l160-57z"/><path fill="#fff" d="M176 160v192l80-64 80 64V160l-80 64-80-64z"/></svg>'
	},
	{
		id: 'plex',
		name: 'Plex',
		svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#E5A00D" d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zM128 384V128l128 128-128 128zm256-128l-128 128V128l128 128z"/></svg>'
	},
	{
		id: 'portainer',
		name: 'Portainer',
		svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#13BEF9" d="M256 32C132 32 32 132 32 256s100 224 224 224 224-100 224-224S380 32 256 32zm0 64c88.4 0 160 71.6 160 160s-71.6 160-160 160-160-71.6-160-160 71.6-160 160-160zm-48 48v224l96-112-96-112z"/></svg>'
	},
	{
		id: 'homeassistant',
		name: 'Home Assistant',
		svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#03A9F4" d="M256 32l224 128v192L256 480 32 352V160L256 32zm0 64L96 176v160l160 80 160-80V176L256 96zm-32 80h64v64h-64v-64zm96 0h64v64h-64v-64zm-192 0h64v64H128v-64z"/></svg>'
	}
];

/**
 * Register all additional icons with Obsidian.
 * Call this once on plugin load.
 */
export function registerIconLibraries(): void {
	// Register Devicons
	for (const icon of DEVICONS) {
		const fullId = `devicon-${icon.id}`;
		addIcon(fullId, icon.svg);
	}

	// Register selfh.st icons
	for (const icon of SELFHOST_ICONS) {
		const fullId = `selfhst-${icon.id}`;
		addIcon(fullId, icon.svg);
	}
}

/**
 * Get display name for a custom library icon ID.
 */
export function getLibraryIconName(id: string): string | undefined {
	if (id.startsWith('devicon-')) {
		const short = id.replace('devicon-', '');
		const found = DEVICONS.find(d => d.id === short);
		return found ? `Devicon: ${found.name}` : id;
	}
	if (id.startsWith('selfhst-')) {
		const short = id.replace('selfhst-', '');
		const found = SELFHOST_ICONS.find(d => d.id === short);
		return found ? `selfh.st: ${found.name}` : id;
	}
	return undefined;
}

/**
 * Check if an ID belongs to a custom library.
 */
export function isLibraryIcon(id: string): boolean {
	return id.startsWith('devicon-') || id.startsWith('selfhst-');
}
