# Transparent brand assets

## Requirements

- WHEN the header renders, both supplied brand elements SHALL have actual PNG alpha transparency, without cream rectangles.
- WHEN resizing the header, both elements SHALL retain their aspect ratio and remain separated from navigation and commerce controls.
- The original files SHALL remain available; generated files use new names.

## Design and tasks

Use the built-in image generation tool in background-extraction edit mode for
each supplied raster independently. Preserve the CABAK lettering, CK monogram,
arcs, rules and brown ink. Verify alpha and visual rendering before integration.
Use contained images without circular CSS clipping. Reduce the desktop symbol
to 76px and wordmark to 220px; phone sizes are 60px and 184px with a 12px gap.
Keep existing responsive header rows. Validate phone/tablet/desktop layout and
Shopify Theme Check, then sync development only.

## Generation prompts

Built-in tool, not CLI. Inputs: `../image copy.png` and `../image.png`.

Wordmark: Use case: background-extraction. Edit target: supplied CABAK ACTIVEWEAR horizontal wordmark. Remove ONLY the cream/beige rectangular background, replacing it with genuine alpha transparency, not a checkerboard drawing. Preserve precisely the existing stylized CABAK letterforms (open triangular A), the tracking, ACTIVEWEAR text, fine horizontal rules, and brown ink color #735238. Flat crisp logo, no shadow, no glow, no gradient, no mockup. Keep all strokes intact. Output a tightly framed horizontal transparent PNG with a small uniform transparent margin around all visible ink, no excessive empty space. Intended as the exact supplied brand logo on a Shopify header.

Symbol: Use case: background-extraction. Edit target: supplied circular CABAK ACTIVEWEAR CK monogram. Remove ONLY all cream/beige background, replace with genuine alpha transparency, not checkerboard artwork. Preserve exactly the CK monogram, delicate surrounding side arcs, CABAK curved lettering above, ACTIVEWEAR curved lettering below. Keep brown ink #735238 and same thin elegant strokes, no redesign or new ornaments, no shadows no glow. Output square transparent PNG with tight framing around complete circular mark plus a small even transparent margin. No clipped lettering. This is the existing brand logo for a Shopify header.
