/**
 * Additional icon libraries for the customized Iconic fork.
 * 
 * IMPORTANT: All SVGs here MUST be monochrome (no brand colors).
 * They use fill="currentColor" so Obsidian's color picker and
 * the plugin's theming can properly tint them.
 * 
 * IDs use prefixes:
 *  - devicon-*
 *  - selfhst-*
 *  - simple-*
 */

import { addIcon } from 'obsidian';

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
 * Simple Icons - these are already designed as monochrome.
 */
export const SIMPLE_ICONS: IconDefinition[] = [
	// Brands & Productivity
	{ id: 'github', name: 'GitHub', library: 'simple', svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>' },
	{ id: 'gitlab', name: 'GitLab', library: 'simple', svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="m23.6004 9.5927-.0337-.0862L20.3.9814a.851.851 0 0 0-.3362-.405.8748.8748 0 0 0-.9997.0539.8748.8748 0 0 0-.29.4399l-2.2055 6.748H7.5375l-2.2057-6.748a.8573.8573 0 0 0-.29-.4412.8748.8748 0 0 0-.9997-.0537.8585.8585 0 0 0-.3362.4049L.4332 9.5015l-.0325.0862a6.0657 6.0657 0 0 0 2.0119 7.0105l.0113.0087.03.0213 4.976 3.7264 2.462 1.8633 1.4995 1.1321a1.0085 1.0085 0 0 0 1.2197 0l1.4995-1.1321 2.4619-1.8633 5.006-3.7489.0125-.01a6.0682 6.0682 0 0 0 2.0094-7.003z"/></svg>' },
	{ id: 'atlassian', name: 'Atlassian', library: 'simple', svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M7.12 11.084a.683.683 0 00-1.16.126L.075 22.974a.703.703 0 00.63 1.018h8.19a.678.678 0 00.63-.39c1.767-3.65.696-9.203-2.406-12.52zM11.434.386a15.515 15.515 0 00-.906 15.317l3.95 7.9a.703.703 0 00.628.388h8.19a.703.703 0 00.63-1.017L12.63.38a.664.664 0 00-1.196.006z"/></svg>' },
	{ id: 'confluence', name: 'Confluence', library: 'simple', svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M.87 18.257c-.248.382-.53.875-.763 1.245a.764.764 0 0 0 .255 1.04l4.965 3.054a.764.764 0 0 0 1.058-.26c.199-.332.454-.763.733-1.221 1.967-3.247 3.945-2.853 7.508-1.146l4.957 2.337a.764.764 0 0 0 1.028-.382l2.364-5.346a.764.764 0 0 0-.382-1 599.851 599.851 0 0 1-4.965-2.361C10.911 10.97 5.224 11.185.87 18.257zM23.131 5.743c.249-.405.531-.875.764-1.25a.764.764 0 0 0-.256-1.034L18.675.404a.764.764 0 0 0-1.058.26c-.195.335-.451.763-.734 1.225-1.966 3.246-3.945 2.85-7.508 1.146L4.437.694a.764.764 0 0 0-1.027.382L1.046 6.422a.764.764 0 0 0 .382 1c1.039.49 3.105 1.467 4.965 2.361 6.698 3.246 12.392 3.029 16.738-4.04z"/></svg>' },
	{ id: 'jira', name: 'Jira', library: 'simple', svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M11.571 11.513H0a5.218 5.218 0 0 0 5.232 5.215h2.13v2.057A5.215 5.215 0 0 0 12.575 24V12.518a1.005 1.005 0 0 0-1.005-1.005zm5.723-5.756H5.723A5.218 5.218 0 0 0 .491 10.97h10.57a1.004 1.004 0 0 0 1.005-1.005V5.757zM23.132 8.9h-5.723a5.218 5.218 0 0 0 5.232-5.215h-10.57a1.004 1.004 0 0 0-1.004 1.005v5.208a1.004 1.004 0 0 0 1.004 1.005h10.57z"/></svg>' },
	{ id: 'buffer', name: 'Buffer', library: 'simple', svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M1.371 5.476L11.943 0l10.686 5.476-10.686 5.495zm3.36 4.81l7.212 3.547 7.288-3.547 3.398 1.655-10.686 5.202L1.371 11.94zm0 6.171l7.212 3.911 7.288-3.91 3.398 1.815L11.943 24 1.371 18.273z"/></svg>' },
	{ id: 'slack', name: 'Slack', library: 'simple', svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM15.165 6.313a2.528 2.528 0 0 1 2.523-2.521A2.528 2.528 0 0 1 20.21 6.313a2.528 2.528 0 0 1-2.522 2.521h-2.523V6.313zM17.688 15.165a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 17.688 20.21a2.528 2.528 0 0 1-2.523-2.523v-2.522h2.523zM15.165 17.688a2.528 2.528 0 0 1-2.52 2.523 2.528 2.528 0 0 1-2.52-2.523V11.37a2.527 2.527 0 0 1 2.52-2.52 2.527 2.527 0 0 1 2.52 2.52v6.318z"/></svg>' },
	{ id: 'notion', name: 'Notion', library: 'simple', svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M4.459 4.208c.746.606 1.026.56 2.82.518l.013 4.849c0 .98-.377 2.323-1.762 2.323-1.466 0-2.177-1.254-2.177-2.323V4.208zM4.459 19.792c.746.606 1.026.56 2.82.518l.013-4.849c0-.98-.377-2.323-1.762-2.323-1.466 0-2.177 1.254-2.177 2.323v4.331zM9.5 4.208c.746.606 1.026.56 2.82.518l.013 4.849c0 .98-.377 2.323-1.762 2.323-1.466 0-2.177-1.254-2.177-2.323V4.208zM9.5 19.792c.746.606 1.026.56 2.82.518l.013-4.849c0-.98-.377-2.323-1.762-2.323-1.466 0-2.177 1.254-2.177 2.323v4.331zM14.5 4.208c.746.606 1.026.56 2.82.518l.013 4.849c0 .98-.377 2.323-1.762 2.323-1.466 0-2.177-1.254-2.177-2.323V4.208zM14.5 19.792c.746.606 1.026.56 2.82.518l.013-4.849c0-.98-.377-2.323-1.762-2.323-1.466 0-2.177 1.254-2.177 2.323v4.331z"/></svg>' },
	{ id: 'figma', name: 'Figma', library: 'simple', svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M15.852 8.981h-4.588V0h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.491-4.49 4.491zM12.735 7.51h3.117c1.242 0 2.25-1.008 2.25-2.25s-1.008-2.25-2.25-2.25h-3.117v4.5zM12.735 0h-3.117c-2.476 0-4.49 2.014-4.49 4.49s2.014 4.49 4.49 4.49h3.117V0zM8.218 8.981H4.63c-2.476 0-4.49 2.014-4.49 4.49s2.014 4.49 4.49 4.49h3.588v-8.98zM4.63 16.96c-1.242 0-2.25-1.008-2.25-2.25s1.008-2.25 2.25-2.25h3.588v4.5H4.63zM15.852 16.96h-3.117c-2.476 0-4.49 2.014-4.49 4.49s2.014 4.49 4.49 4.49h3.117v-8.98z"/></svg>' },
	{ id: 'linear', name: 'Linear', library: 'simple', svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M2.886 4.18A11.982 11.982 0 0 1 11.99 0C18.624 0 24 5.376 24 12.009c0 3.64-1.62 6.903-4.18 9.105L2.8 7.072A11.97 11.97 0 0 1 2.886 4.18zM19.82 19.82a11.98 11.98 0 0 1-7.83 2.99c-6.634 0-12.01-5.376-12.01-12.01 0-3.64 1.62-6.902 4.18-9.105l17.02 14.042a11.97 11.97 0 0 1-1.36 4.083z"/></svg>' },
	{ id: 'trello', name: 'Trello', library: 'simple', svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M21.147 0H2.853A2.86 2.86 0 000 2.853v18.294A2.86 2.86 0 002.853 24h18.294A2.86 2.86 0 0024 21.147V2.853A2.86 2.86 0 0021.147 0zM9.735 17.853H4.853V6.147h4.882v11.706zm9.412-4.882h-4.882V6.147h4.882v6.824z"/></svg>' },
	{ id: 'zoom', name: 'Zoom', library: 'simple', svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M5.033 14.649H.743a.74.74 0 0 1-.686-.458.74.74 0 0 1 .16-.808L3.19 10.41H1.06A1.06 1.06 0 0 1 0 9.3v-3.18A1.06 1.06 0 0 1 1.06 5.06h3.973a1.06 1.06 0 0 1 1.06 1.06v3.18a1.06 1.06 0 0 1-.06.24l2.04 2.04a.74.74 0 0 1 .16.808.74.74 0 0 1-.686.458H5.033zM24 12.12v-1.14a2.22 2.22 0 0 0-2.22-2.22h-3.18a2.22 2.22 0 0 0-2.22 2.22v1.14a2.22 2.22 0 0 0 2.22 2.22h3.18a2.22 2.22 0 0 0 2.22-2.22z"/></svg>' },
	{ id: 'miro', name: 'Miro', library: 'simple', svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M17.392 0H13.9L17 4.808 10.444 0H6.949l3.102 6.3L3.494 0H0l3.05 8.131L0 24h3.494L10.05 6.985 6.949 2.22h3.495L17 7.02 13.9 0h3.492z"/></svg>' },
];

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
