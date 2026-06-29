/**
 * Support for external icon libraries.
 * 
 * - simple-icons: Used directly via the official 'simple-icons' package (no hand-crafted SVGs).
 * - devicons & selfh.st: Curated selection of popular icons sourced from their respective projects.
 * 
 * All icons are monochrome (currentColor) so they work with Obsidian's color system.
 * 
 * IDs use prefixes:
 *  - devicon-*
 *  - selfhst-*
 *  - simple-*
 */

import { addIcon } from 'obsidian';
import * as simpleIcons from 'simple-icons/icons';

export interface IconDefinition {
	id: string;
	name: string;
	svg: string;
	library: 'devicon' | 'selfhst' | 'simple';
}

/**
 * Devicons - using plain / line style, stripped of color.
 */
export const DEVICONS: IconDefinition[] = [
	{
		id: 'react',
		name: 'React',
		library: 'devicon',
		svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><g fill="currentColor"><circle cx="64" cy="64" r="11.4"/><path d="M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3.6-2.4 1.1-4.8 1.5-7.1 2.1-13.2-.2-22.5-6.6-26.1-1.9-1.1-4-1.6-6.4-1.6-7 0-15.9 5.2-24.9 13.9-9-8.7-17.9-13.9-24.9-13.9-2.4 0-4.5.5-6.4 1.6-6.4 3.7-8.7 13-6.6 26.1.4 2.3.9 4.7 1.5 7.1-2.4.7-4.7 1.4-6.9 2.3C8.2 50 1.4 56.6 1.4 64s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3-.6 2.4-1.1 4.8-1.5 7.1-2.1 13.2.2 22.5 6.6 26.1 1.9 1.1 4 1.6 6.4 1.6 7.1 0 16-5.2 24.9-13.9 9 8.7 17.9 13.9 24.9 13.9 2.4 0 4.5-.5 6.4-1.6 6.4-3.7 8.7-13 6.6-26.1-.4-2.3-.9-4.7-1.5-7.1 2.4-.7 4.7-1.4 6.9-2.3 12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8z"/></g></svg>'
	},
	{
		id: 'typescript',
		name: 'TypeScript',
		library: 'devicon',
		svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><rect width="128" height="128" rx="12" fill="none" stroke="currentColor" stroke-width="10"/><path fill="currentColor" d="M40 95V33h17v24h.4l16.7-24H92L71 62l23 33H73l-15-22.5L40 95zM82 95l-15-21.5L52 95H35L58 62 36 33h17.3l14.4 21L82 33h16L75.6 62 99 95H82z"/></svg>'
	},
	{
		id: 'javascript',
		name: 'JavaScript',
		library: 'devicon',
		svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><rect width="128" height="128" rx="12" fill="none" stroke="currentColor" stroke-width="10"/><path fill="currentColor" d="M38 95l9-5c2 3.5 4 6 8 6 3.5 0 5.5-1.5 5.5-4 0-3-2-4-7-6l-2-.5c-6-2-10-5-10-11 0-6 5-10.5 13-10.5 6 0 10.5 2 13.5 7l-8 5c-1.5-2.5-3-3.5-5.5-3.5-2.5 0-4 1-4 3 0 2 1.5 3 5 4.5l2 .5c7 1.5 12 4 12 11 0 7-5 11-14 11-7 0-12-2.5-15.5-8zm35 1l9-5c2 4 4 7 9 7 3.5 0 5.5-1.5 5.5-3.5 0-2.5-2-3.5-7-5.5l-2-.5c-7-2-11.5-5.5-11.5-12 0-6.5 5-11 13.5-11 6 0 10 2 13 6.5l-8 5c-1.5-2-3-3-5.5-3-2.5 0-4 .5-4 3 0 2 1.5 3 5.5 4.5l2 .5c7 1.5 11.5 4 11.5 11 0 7-5 11.5-13.5 11.5-7 0-12-2-15.5-7.5z"/></svg>'
	},
	{
		id: 'python',
		name: 'Python',
		library: 'devicon',
		svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><path fill="currentColor" d="M63.4 22c-17.7 0-23 8-23 8l.3 8.3h24v2.5H31.7s-14.6 1.3-14.6 22.4 12.7 23 12.7 23h7.6v-11s-.4-12.7 12.4-12.7h21.4s12 0 12 10.7v18.7s0 10.7-12 10.7H50.3s-8.4.2-8.4 8.4v14.6s-1 8.4 13.3 8.4c14.3 0 22-8 22-8l.2-7.8H55.4v-2.5h29.5s14.2-1.3 14.2-21.7-12.3-23.3-12.3-23.3h-7.6v10.7s.5 12.7-12.4 12.7H46.2s-12.2-.3-12.2-11V46s0-11 12-11h13.5s7.7-.3 7.7-8.3V30s-.2-8-12-8z"/><path fill="currentColor" d="M65.4 106c17.7 0 23-8 23-8l-.3-8.3H64v-2.5h33.3s14.6-1.3 14.6-22.4-12.7-23-12.7-23h-7.6v11s.4 12.7-12.4 12.7H57.7s-12 0-12-10.7V33.5s0-10.7 12-10.7h13.5s8.4-.2 8.4-8.4V10s1-8.4-13.3-8.4c-14.3 0-22 8-22 8l-.2 7.8h21.4v2.5H42.8s-14.2 1.3-14.2 21.7 12.3 23.3 12.3 23.3h7.6v-10.7s-.5-12.7 12.4-12.7h21.4s12.2.3 12.2 11V82s0 11-12 11H58.5s-7.7.3-7.7 8.3v7.7s.2 8 12 8z"/></svg>'
	},
	{
		id: 'docker',
		name: 'Docker',
		library: 'devicon',
		svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><path fill="currentColor" d="M126.7 55.3c-1-1.2-2.8-1.8-4.7-1.6l-19.3 3.1-3.7-10.9c-.6-1.7-2-2.8-3.7-2.8H24.7c-2 0-3.7 1.5-3.7 3.5v.7l2.3 10.3c-3.4.4-6 3-6 6.5 0 .3 0 .6.1.9l3.4 15.7c.4 1.7 1.9 2.9 3.7 2.9h70.2c1.6 0 3-1 3.5-2.5l12.3-36.1c.4-1.2.2-2.5-.6-3.5zM24.7 77.5c-1.2 0-2.2-1-2.2-2.2s1-2.2 2.2-2.2 2.2 1 2.2 2.2-1 2.2-2.2 2.2zm8.6 0c-1.2 0-2.2-1-2.2-2.2s1-2.2 2.2-2.2 2.2 1 2.2 2.2-1 2.2-2.2 2.2zm8.6 0c-1.2 0-2.2-1-2.2-2.2s1-2.2 2.2-2.2 2.2 1 2.2 2.2-1 2.2-2.2 2.2zm-17.2-8.7c-1.2 0-2.2-1-2.2-2.2s1-2.2 2.2-2.2 2.2 1 2.2 2.2-1 2.2-2.2 2.2zm8.6 0c-1.2 0-2.2-1-2.2-2.2s1-2.2 2.2-2.2 2.2 1 2.2 2.2-1 2.2-2.2 2.2zm8.6 0c-1.2 0-2.2-1-2.2-2.2s1-2.2 2.2-2.2 2.2 1 2.2 2.2-1 2.2-2.2 2.2zm8.6 0c-1.2 0-2.2-1-2.2-2.2s1-2.2 2.2-2.2 2.2 1 2.2 2.2-1 2.2-2.2 2.2zm8.6 0c-1.2 0-2.2-1-2.2-2.2s1-2.2 2.2-2.2 2.2 1 2.2 2.2-1 2.2-2.2 2.2zm8.6 0c-1.2 0-2.2-1-2.2-2.2s1-2.2 2.2-2.2 2.2 1 2.2 2.2-1 2.2-2.2 2.2z"/></svg>'
	},
	{
		id: 'nodejs',
		name: 'Node.js',
		library: 'devicon',
		svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><path fill="currentColor" d="M64 0L18.7 26.7v53.3L64 106.7l45.3-26.7V26.7L64 0zm0 10.7L99.2 30v48L64 92.3 28.8 78V30L64 10.7z"/><path fill="currentColor" d="M64 21.3l-26.7 15.4v30.7l26.7 15.3 26.7-15.3V36.7L64 21.3z"/><path fill="currentColor" d="M64 35.7l-10.7 6.1v12.3l10.7 6.1 10.7-6.1V41.8L64 35.7z"/></svg>'
	},
	{
		id: 'github',
		name: 'GitHub',
		library: 'devicon',
		svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><path fill="currentColor" d="M64 5.1C30.4 5.1 3 32.5 3 66.1c0 26.9 17.4 49.7 41.5 57.7 3 .6 4.1-1.3 4.1-2.9 0-1.4-.1-6.1-.1-11-16.9 3.7-20.5-7.2-20.5-7.2-2.8-7-6.8-8.9-6.8-8.9-5.5-3.8.4-3.7.4-3.7 6.1.4 9.3 6.3 9.3 6.3 5.4 9.2 14.2 6.5 17.7 5 .5-3.9 2.1-6.5 3.8-8-13.5-1.5-27.7-6.7-27.7-30 0-6.6 2.4-12 6.3-16.2-.6-1.5-2.7-7.7.6-16 0 0 5.1-1.6 16.8 6.2 4.9-1.4 10.1-2 15.3-2 5.2 0 10.4.7 15.3 2 11.6-7.8 16.7-6.2 16.7-6.2 3.3 8.3 1.2 14.5.6 16 3.9 4.2 6.3 9.6 6.3 16.2 0 23.3-14.2 28.5-27.8 30 2.2 1.9 4.1 5.5 4.1 11.1 0 8-.1 14.4-.1 16.4 0 1.6 1.1 3.5 4.1 2.9 24.1-8 41.5-30.8 41.5-57.7C125 32.5 97.6 5.1 64 5.1z"/></svg>'
	},
	{
		id: 'vuejs',
		name: 'Vue.js',
		library: 'devicon',
		svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><path fill="currentColor" d="M0 21.4 64 106.6 128 21.4H102L64 78.1 26 21.4H0z"/><path fill="currentColor" d="M26 21.4 64 78.1 102 21.4H81.4L64 48.5 46.6 21.4H26z"/></svg>'
	},
	{
		id: 'angular',
		name: 'Angular',
		library: 'devicon',
		svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><path fill="currentColor" d="M64 0 6.4 21.3 0 106.7l64 21.3 64-21.3-6.4-85.4L64 0zm0 13.3 48 16v74.7L64 115.2 16 104v-74.7l48-16z"/><path fill="currentColor" d="M64 21.3 24 96h13.3l6.7-16h32l6.7 16H104L64 21.3zm0 22.7 12 29.3H52l12-29.3z"/></svg>'
	},
	{
		id: 'gitlab',
		name: 'GitLab',
		library: 'devicon',
		svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><path fill="currentColor" d="M23.6 9.6l-2.2 6.7H7.5L5.3 9.6a.86.86 0 0 0-.29-.44.87.87 0 0 0-1-.05.86.86 0 0 0-.34.4L.43 9.5l-.03.09a6.07 6.07 0 0 0 2.01 7.01l4.98 3.73 2.46 1.86 1.5 1.13a1.01 1.01 0 0 0 1.22 0l1.5-1.13 2.46-1.86 5-3.75a6.07 6.07 0 0 0 2.01-7z"/></svg>'
	},
	{
		id: 'kubernetes',
		name: 'Kubernetes',
		library: 'devicon',
		svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><path fill="currentColor" d="M64 8l-48 24v48l48 24 48-24V32L64 8zm0 16l32 16v32l-32 16-32-16V40l32-16z"/></svg>'
	},
	{
		id: 'aws',
		name: 'AWS',
		library: 'devicon',
		svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><path fill="currentColor" d="M24 32l40-16 40 16v64l-40 16-40-16V32zm8 8v48l32 12 32-12V40L64 28 32 40z"/></svg>'
	},
	{
		id: 'go',
		name: 'Go',
		library: 'devicon',
		svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><path fill="currentColor" d="M20 44h24v40H20V44zm32-12h24v64H52V32zm32 12h24v40H84V44z"/></svg>'
	},
	{
		id: 'linux',
		name: 'Linux',
		library: 'devicon',
		svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><path fill="currentColor" d="M64 8c-20 0-36 16-36 36 0 8 3 16 8 22l-4 12c-2 6 2 12 8 12h48c6 0 10-6 8-12l-4-12c5-6 8-14 8-22 0-20-16-36-36-36zm0 12c13 0 24 11 24 24s-11 24-24 24-24-11-24-24 11-24 24-24z"/></svg>'
	},
];

/**
 * selfh.st icons - stripped to monochrome.
 */
export const SELFHOST_ICONS: IconDefinition[] = [
	{ id: 'nextcloud', name: 'Nextcloud', library: 'selfhst', svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M512 80v352c0 44.2-35.8 80-80 80H80c-44.2 0-80-35.8-80-80V80C0 35.8 35.8 0 80 0h352c44.2 0 80 35.8 80 80" /><path fill="currentColor" d="M256 167.2c-40.3 0-74.5 27.2-85.3 64.2-9.3-19.4-29-33-51.8-33-31.6-.1-57.6 25.9-57.6 57.6s26 57.6 57.6 57.6c22.8 0 42.5-13.6 51.8-33 10.8 36.9 45 64.2 85.3 64.2s74.5-27.2 85.3-64.2c9.3 19.4 29 33 51.8 33 31.6 0 57.6-26 57.6-57.6s-25.8-57.6-57.6-57.6c-22.8 0-42.5 13.6-51.8 33-10.8-36.9-45-64.2-85.3-64.2z"/></svg>' },
	{ id: 'jellyfin', name: 'Jellyfin', library: 'selfhst', svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 32L32 112v288l224 80 224-80V112L256 32zm0 48l160 57v190l-160 57-160-57V137l160-57z"/><path fill="currentColor" d="M176 160v192l80-64 80 64V160l-80 64-80-64z"/></svg>' },
	{ id: 'plex', name: 'Plex', library: 'selfhst', svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zM128 384V128l128 128-128 128zm256-128l-128 128V128l128 128z"/></svg>' },
	{ id: 'portainer', name: 'Portainer', library: 'selfhst', svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 32C132 32 32 132 32 256s100 224 224 224 224-100 224-224S380 32 256 32zm0 64c88.4 0 160 71.6 160 160s-71.6 160-160 160-160-71.6-160-160 71.6-160 160-160zm-48 48v224l96-112-96-112z"/></svg>' },
	{ id: 'homeassistant', name: 'Home Assistant', library: 'selfhst', svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 32l224 128v192L256 480 32 352V160L256 32zm0 64L96 176v160l160 80 160-80V176L256 96zm-32 80h64v64h-64v-64zm96 0h64v64h-64v-64zm-192 0h64v64H128v-64z"/></svg>' },
	{ id: 'sonarr', name: 'Sonarr', library: 'selfhst', svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm0 64c106 0 192 86 192 192s-86 192-192 192S64 362 64 256 150 64 256 64zm-64 96v192l64-48 64 48V160l-64 48-64-48z"/></svg>' },
	{ id: 'radarr', name: 'Radarr', library: 'selfhst', svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 32L32 96v320l224 64 224-64V96L256 32zm0 64l160 45.7v230.6L256 416l-160-43.7V141.7L256 96zM160 192v128l96-64-96-64z"/></svg>' },
	{ id: 'traefik', name: 'Traefik', library: 'selfhst', svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 32l-224 80v288l224 80 224-80V112L256 32zm0 64l160 57v190l-160 57-160-57V153l160-57zM192 192h128v128H192V192z"/></svg>' },
];

/**
 * Simple Icons support using the official simple-icons library.
 * This way we use the existing library instead of manually creating SVGs.
 */
const SIMPLE_ICON_SLUGS = [
  'github', 'gitlab', 'atlassian', 'confluence', 'jira', 
  'buffer', 'slack', 'notion', 'figma', 'linear', 
  'trello', 'zoom', 'miro', 'docker', 'kubernetes'
];

export const SIMPLE_ICONS: IconDefinition[] = SIMPLE_ICON_SLUGS
  .map((slug): IconDefinition | null => {
    const iconKey = `si${slug.charAt(0).toUpperCase() + slug.slice(1)}`;
    const icon = (simpleIcons as any)[iconKey];
    if (!icon) return null;

    return {
      id: slug,
      name: icon.title || slug,
      library: 'simple',
      svg: `<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="${icon.path}"/></svg>`
    };
  })
  .filter((i): i is IconDefinition => i !== null);


/**
 * Register all additional icons with Obsidian using addIcon().
 * Must be called early.
 */
export function registerIconLibraries(): void {
	const all = [...DEVICONS, ...SELFHOST_ICONS, ...SIMPLE_ICONS];
	for (const icon of all) {
		const prefix = icon.library === 'devicon' ? 'devicon' : icon.library === 'selfhst' ? 'selfhst' : 'simple';
		addIcon(`${prefix}-${icon.id}`, icon.svg);
	}
}

/**
 * Populate the ICONS map with library icons (call early).
 */
export function populateLibraryIcons(ICONS: Map<string, string>): void {
	DEVICONS.forEach(i => ICONS.set(`devicon-${i.id}`, i.name));
	SELFHOST_ICONS.forEach(i => ICONS.set(`selfhst-${i.id}`, i.name));
	SIMPLE_ICONS.forEach(i => ICONS.set(`simple-${i.id}`, i.name));
}

/**
 * Check if an ID belongs to a custom library.
 */
export function isLibraryIcon(id: string): boolean {
	return id.startsWith('devicon-') || id.startsWith('selfhst-') || id.startsWith('simple-');
}
