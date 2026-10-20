# Lighter header trial

Requested reversible preview: lighten only the main header beige to `#F8F4EE`.
Keep the logo, typography, layout and brown announcement strip unchanged.

Implementation: set `header_section.settings.background_color_top` in
`sections/header-group.json`. Validate the rendered header background and sync
the development theme.

Rollback: restore the original value `{{ settings.color_palette.background }}`
(currently `#F2ECE4`). This restores the existing palette binding as well as its color.
