# Graphify integration requirements

## Scope

Connect this Shopify theme repository to Graphify so the structural graph can be refreshed automatically after source changes and queried alongside the theme code.

## Acceptance criteria

- WHEN the repository is analyzed, Graphify SHALL include Liquid, JavaScript, JSON, CSS, SVG, and Markdown source files while excluding `.git`, archives, and generated caches.
- WHEN `graphify update .` completes, the generated graph SHALL record the current Git commit in `built_at_commit` and produce a human-readable `GRAPH_REPORT.md`.
- WHEN a tracked code file (Liquid or JavaScript) changes while the watcher is running, the integration SHALL trigger a Graphify refresh without requiring manual file enumeration.
- WHEN documentation, theme settings, CSS, SVG, or image files change, the one-shot refresh command SHALL remain available to reconcile the graph explicitly.
- WHEN Graphify is unavailable or its watcher dependency is missing, the launcher SHALL fail with an actionable message and SHALL NOT modify theme source files.
- WHEN the graph is committed, generated artifacts SHALL remain reproducible from the repository and SHALL not contain credentials or private tokens.
- WHEN a developer starts work on the theme, the repository SHALL document the one-command refresh and watch workflows.

## Non-goals

- The integration SHALL NOT change Shopify Liquid behavior, storefront settings, APIs, or deployment configuration.
- The integration SHALL NOT commit changes automatically; Git commit and push remain explicit developer actions.
