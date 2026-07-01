# Changelog

## Unreleased

## 0.0.6

- Add a library dropdown to the icon picker so searches are scoped to one icon library at a time.
- Fix clipped Simple Icons and Devicons by preserving their correct default SVG viewBox dimensions.
- Lazy-load full third-party icon libraries when the picker opens and only register already-used library icons at startup.
- Reduce unnecessary settings writes from the icon picker and remember the last selected library.
- Add a release bundle size check to protect Obsidian Sync compatibility.
- Show a fallback icon when a stored icon ID is unavailable.

## 0.0.5

- Fix remaining source review warnings around proxy typing, unbound methods, `this` aliasing, and RuleEditor promise-like condition checks.

## 0.0.4

- Clean up additional Obsidian review warnings in CSS and TypeScript source.
- Remove broad CSS `:has()` selectors, `!important` declarations, and partially supported multicolumn usage.
- Replace duplicated dialog hotkey private API access with a typed plugin helper.

## 0.0.3

- Restore the community plugin ID to `iconic-custom` so review releases match the existing plugin listing.
- Update release metadata and installation docs for the `iconic-custom` plugin ID.

## 0.0.2

- Change `authorUrl` to Christian Lempa's GitHub profile for plugin review compliance.
- Compress bundled third-party icon data and omit Devicon wordmark variants to keep `main.js` under 5 MB.
- Replace direct style assignments and document usage with review-friendly APIs.
- Explicitly mark intentionally unawaited settings saves.
- Replace `builtin-modules` with Node's built-in module list.

## 0.0.1

Initial Better Icons release:

- Uses the custom plugin ID (`iconic-custom`) so it can be listed separately from the official Iconic plugin.
- Adds expanded icon library support for Simple Icons.
- Adds expanded icon library support for Devicon.
- Keeps the upstream Iconic behavior for customizing icons and colors from the Obsidian UI.
