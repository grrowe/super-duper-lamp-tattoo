# Design System Specification: High-End Editorial Tattoo Studio

## 1. Overview & Creative North Star
**Creative North Star: "The Obsidian Gallery"**

This design system rejects the "street-shop" aesthetic in favor of a curated, high-end editorial experience. We are not building a directory; we are designing a digital monograph. The "Obsidian Gallery" approach treats every screen as a high-contrast composition where the negative space is as intentional as the ink on skin. 

To break the "template" look, we utilize **intentional asymmetry**. Align text to the far right of a container while imagery anchors the left; allow high-contrast serif headlines to overlap image boundaries slightly. This creates a sense of bespoke craftsmanship, signaling to the user that this studio values precision and artistry above all else.

---

## 2. Colors
Our palette is rooted in depth. We move away from flat hex codes toward a "Material Noir" approach, where "black" is a spectrum of textures rather than a single value.

### Palette Tokens
*   **Surface:** `#131313` (The base canvas)
*   **Primary (Accent):** `#ffb4a8` / `#8B0000` (Crimson depth for CTAs and critical focus)
*   **Secondary (Gold):** `#e9c176` (Used for "Certified" labels and premium tier indicators)
*   **On-Surface (Text):** `#e5e2e1` (Off-white to reduce eye strain against the dark void)

### The "No-Line" Rule
**Explicit Instruction:** Do not use 1px solid borders to separate sections. Sectioning must be achieved through:
1.  **Tonal Shifts:** Transitioning from `surface` to `surface-container-low` (#1C1B1B).
2.  **Negative Space:** Using the `16` (5.5rem) or `20` (7rem) spacing tokens to create a "void" between content blocks.

### Glass & Gradient Rule
For floating elements (modals, navigation bars), use **Glassmorphism**. 
*   **Fill:** `surface-container-highest` at 60% opacity.
*   **Effect:** 20px Backdrop Blur.
*   **Gradient:** For primary buttons, use a subtle linear gradient from `primary` (#ffb4a8) to `primary-container` (#8B0000) at 45 degrees to add a metallic, blood-silk sheen.

---

## 3. Typography
The typographic pairing is a dialogue between the "Artist" (Serif) and the "Professional" (Sans-Serif).

*   **Display & Headlines (Noto Serif):** Use these for "Moment" text. The high contrast of Noto Serif reflects the sharp precision of a needle. Use `display-lg` (3.5rem) for hero statements with tight letter-spacing (-0.02em).
*   **Body & UI (Manrope):** A clean, geometric sans-serif that balances the ornate nature of the headings. Manrope provides a utilitarian clarity that assures the client of the studio's professional hygiene and technical standards.
*   **Hierarchy Tip:** Always pair a `headline-lg` Serif with a `label-md` Sans-Serif (All Caps, letter-spaced 0.1em) immediately above it to act as a "category tag."

---

## 4. Elevation & Depth
In a dark UI, traditional shadows often disappear. We define depth through **Tonal Layering**.

*   **The Layering Principle:** 
    *   **Base:** `surface` (#131313)
    *   **Section:** `surface-container-low` (#1C1B1B)
    *   **Component/Card:** `surface-container-highest` (#353534)
    This creates a "natural lift." The closer an object is to the user, the lighter its grey-value becomes.
*   **Ambient Shadows:** If a card must float (e.g., an artist's portfolio preview), use a shadow color of `#000000` with a 40px blur and 40% opacity. It should feel like a soft glow of darkness.
*   **The Ghost Border:** If a form input requires a container, use the `outline-variant` token at 15% opacity. It should be barely visible—a "whisper" of a frame.

---

## 5. Components

### Buttons
*   **Primary:** Sharp corners (`0px` radius). Gradient fill (Crimson). Text: `label-md` (Manrope, Bold, All Caps).
*   **Secondary:** No fill. "Ghost Border" (1px, 20% opacity). Hover state: Background shifts to `surface-container-high`.
*   **Tertiary:** Text only with a 2px underline using the `secondary` (Gold) token.

### Cards & Portfolios
*   **Rule:** Forbid divider lines. 
*   **Layout:** Use `surface-container-lowest` for the card background. Imagery must be top-aligned with no padding, creating a full-bleed "Gallery" look. Text content within the card should use `3` (1rem) padding.

### Input Fields
*   **Style:** Minimalist underline only. The line should be `outline-variant` (low opacity). Upon focus, the line animates to `primary` (Crimson) and the label (Manrope) slides up and shrinks to `label-sm`.

### Additional Component: The "Artist Curated List"
A custom list component for tattoo styles. A large `display-md` Serif number (e.g., 01) in `surface-variant`, overlapped by a `title-lg` Manrope text. No borders—just rhythmic spacing.

---

## 6. Do's and Don'ts

### Do:
*   **Use the Spacing Scale Aggressively:** Give elements room to breathe. High-end luxury is defined by "wasted" space.
*   **High-Contrast Imagery:** Only use photography with deep blacks and sharp highlights.
*   **Intentional Asymmetry:** If three images are in a row, make the middle one slightly taller or offset its Y-position.

### Don't:
*   **Never Use Rounded Corners:** This system uses `0px` for all tokens. Roundness feels "friendly" and "consumer-grade"; sharp edges feel "surgical" and "architectural."
*   **Avoid Pure White:** Never use #FFFFFF. It is too jarring. Use the `on-surface` (#e5e2e1) or `off-white` (#F5F5F5) tokens.
*   **No Generic Icons:** Avoid thick, bubbly icons. Use thin-stroke (1px or 1.5px) vector icons that match the `outline` token weight.