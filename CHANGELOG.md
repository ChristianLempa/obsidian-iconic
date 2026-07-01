# Changelog

## Unreleased

- Change `authorUrl` to Christian Lempa's GitHub profile for plugin review compliance.
- Compress bundled third-party icon data and omit Devicon wordmark variants to keep `main.js` under 5 MB.
- Replace direct style assignments and document usage with review-friendly APIs.
- Explicitly mark intentionally unawaited settings saves.
- Replace `builtin-modules` with Node's built-in module list.

## 0.0.1

Initial Better Icons release:

- Uses a unique plugin ID (`better-icons`) so it can coexist with the official Iconic plugin.
- Adds expanded icon library support for Simple Icons.
- Adds expanded icon library support for Devicon.
- Keeps the upstream Iconic behavior for customizing icons and colors from the Obsidian UI.
