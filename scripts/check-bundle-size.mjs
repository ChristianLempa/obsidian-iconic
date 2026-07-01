import fs from 'node:fs';

const BUNDLE_PATH = process.env.BUNDLE_PATH ?? 'main.js';
const MAX_BYTES = Number.parseInt(process.env.MAX_BUNDLE_BYTES ?? '', 10) || Math.floor(4.7 * 1024 * 1024);

function formatBytes(bytes) {
	return `${(bytes / 1024 / 1024).toFixed(2)} MiB`;
}

const stat = fs.statSync(BUNDLE_PATH);
if (stat.size > MAX_BYTES) {
	console.error(`Bundle size check failed: ${BUNDLE_PATH} is ${formatBytes(stat.size)}, limit is ${formatBytes(MAX_BYTES)}.`);
	console.error('Reduce bundled icon data or raise MAX_BUNDLE_BYTES deliberately.');
	process.exit(1);
}

console.log(`Bundle size check passed: ${BUNDLE_PATH} is ${formatBytes(stat.size)} / ${formatBytes(MAX_BYTES)}.`);
