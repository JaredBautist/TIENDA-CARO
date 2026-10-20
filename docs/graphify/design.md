# Graphify integration design

## Decision

Use Graphify's native extractor for one-shot refreshes and its filesystem watcher for continuous refreshes. Keep the generated `graphify-out/` directory in the repository so the structural index and report are inspectable and tied to a commit.

## Boundaries

- `scripts/graphify-update.sh`: deterministic one-shot refresh from the repository root.
- `scripts/graphify-watch.sh`: long-running watcher that delegates change detection and extraction to `graphify watch .`.
- `graphify-out/`: generated graph, report, manifest, and visualization; treated as derived artifacts.
- `docs/graphify/`: requirements, design, and task trail.

## Operational flow

1. A developer runs `scripts/graphify-update.sh` before review or after a batch of edits.
2. For continuous work, the developer runs `scripts/graphify-watch.sh` in a terminal.
3. Graphify detects source changes, re-extracts the affected code, and rewrites `graphify-out/`.
4. The developer reviews the report and commits graph artifacts together with the source change when appropriate.

## Trade-offs

The native watcher is preferred over a custom polling daemon because it preserves Graphify's extraction semantics and avoids a second change-detection implementation. A tracked launcher provides a stable project entry point without coupling the Shopify theme to a Node build system.
