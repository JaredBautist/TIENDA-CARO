# TIENDA-CARO

## Graphify

This Shopify Horizon theme includes a structural code graph in `graphify-out/`.

- Refresh the graph once: `scripts/graphify-update.sh`
- Watch and refresh after source changes: `scripts/graphify-watch.sh`
- Read the current map: `graphify-out/GRAPH_REPORT.md`

The watcher must remain running in a terminal while editing. Liquid and JavaScript changes update the tree automatically; documentation, settings, CSS, SVG, and image changes can be reconciled with the one-shot command. Git commits and pushes remain explicit.
