# Collections hover interaction

- WHEN a mouse enters the desktop Collections disclosure, it SHALL open immediately.
- WHEN the pointer moves into its submenu, the disclosure SHALL remain open.
- WHEN the mouse leaves, it SHALL close unless keyboard focus remains inside.
- Escape, keyboard activation and mobile tap SHALL remain available.
- Touch SHALL NOT trigger simulated hover opening.

Use native details.open inside the existing navigation custom element. Gate
pointer entry by mouse pointer type and hover/fine-pointer capability. Preserve
focus on pointer exit, closing on focus departure if the pointer is also outside.
No animation, dependency or visual-layout change is needed.

Validation: browser tests for mouse entry, submenu traversal, departure, Escape,
keyboard focus retention and mobile tap; Theme Check and development asset sync.
