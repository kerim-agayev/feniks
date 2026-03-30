# Design System Specification: Cinematic Brutalism

## 1. Overview & Creative North Star: "The Obsidian Rebirth"
This design system is a digital manifestation of the Phoenix—raw, fearless, and rising from the ashes of conventional e-commerce. It rejects the "clean and safe" corporate aesthetic in favor of **Cinematic Brutalism**. 

The creative direction is anchored by the Azerbaijani heritage of intricate carpet geometries juxtaposed against a gritty, anime-inspired dark-tech atmosphere. We break the template by using intentional asymmetry, massive typographic scales, and high-contrast "moments of fire" against an obsidian backdrop. Elements should feel like they are carved out of shadows or illuminated by a dying ember.

**The Aesthetic Pillar:**
- **Raw Texture:** Grainy film overlays and noise filters.
- **Depth through Fire:** Using the Dark Crimson and Ember Orange to create focal points.
- **Cultural Geometry:** Subtle background patterns derived from "Buta" (Paisley) and carpet weaves.

---

## 2. Colors & Atmospheric Layering
The palette is rooted in the "Surface-Container" logic of Material 3 but re-engineered for a high-end luxury feel.

### The Palette
- **Background (`#131313`)**: The void. Not pure black, but a deep, atmospheric charcoal.
- **Primary / Crimson (`#8B0000`)**: Used for "The Heartbeat"—CTAs, urgent alerts, and active states.
- **Secondary / Ember (`#C45E1A`)**: For interactions, glow effects, and highlights.
- **Tertiary / Gold (`#C9A84C`)**: The "Luxury Seal." Used sparingly for brand signatures and premium labels.
- **On-Surface / Cream (`#F5F0E8`)**: All typography and icons. Pure white is forbidden; we use this off-white to maintain a "printed on canvas" feel.

### The "No-Line" Rule
Traditional 1px borders are strictly prohibited. Boundaries between content blocks must be established through:
1.  **Background Shifts:** Transitioning from `surface-container-low` (#1C1B1B) to `surface-container-highest` (#353534).
2.  **Negative Space:** Utilizing the `20` (7rem) or `24` (8.5rem) spacing tokens to create breathing room between conceptual sections.

### Glass & Gradients
- **The Ember Glow:** Use a radial gradient from `primary_container` (#8B0000) to `surface` (#131313) at 15% opacity behind product photography to simulate a phoenix's aura.
- **Glassmorphism:** Floating navigation bars must use `surface_container_lowest` (#0E0E0E) at 70% opacity with a `20px` backdrop-blur.

---

## 3. Typography: The Editorial Voice
Typography is the primary driver of the brand's "Fearless" persona.

- **Display (Epilogue / Bebas Neue style):** Massive, bold, and condensed. Used for "QORXMA" and high-impact headers. Always use `uppercase` for Display styles.
- **Headline (Epilogue):** Strong, authoritative headers that guide the user through the narrative.
- **The "Signature" (Custom Script):** Use the elegant script for the brand name "Buta" as a decorative element, often overlapping with the Display text to create a high-fashion editorial look.
- **Body (Inter):** Set with generous line height (1.6) for readability against the dark background.
- **Label (Space Grotesk):** Mono-spaced feel for technical specs, sizing, and price points to evoke a "tech-wear" utility.

---

## 4. Elevation & Depth
We do not use shadows to mimic gravity; we use layering to mimic light.

- **The Layering Principle:** Place a product card (`surface-container-highest`) onto a section (`surface-container-low`). The contrast in tonal value creates the lift.
- **Ambient Shadows:** Only for floating modals. Use a tinted shadow: `rgba(139, 0, 0, 0.1)` (Crimson tint) with a `40px` blur. It should feel like a warm glow, not a grey smudge.
- **The "Ghost Border":** If a separation is required for accessibility, use the `outline_variant` (#5A403C) at **15% opacity**.

---

## 5. Components & UI Elements

### Buttons
- **Primary:** `primary_container` (#8B0000) background. No rounded corners (`0px`). Text is `on_primary_fixed` (#410000). On hover, add a `0.5px` border of `gold_accent`.
- **Secondary:** Ghost style. No background. `outline` border (#AA8984) at 20% opacity. Text in `on_surface`.
- **Tertiary:** Underlined text using the `ember_orange` (#C45E1A) underline.

### Cards
- **Product Cards:** Absolute square edges (`0px`). Use a grainy texture overlay (5% opacity noise). No dividers. Content is separated by `spacing.4` (1.4rem).
- **Interactive State:** On hover, the card should perform a `3D perspective tilt` (2deg) towards the cursor, catching a subtle "ember" highlight on the edge.

### Inputs & Fields
- **Text Inputs:** Bottom-border only (`2px` height). Default color: `surface_variant`. Active color: `tertiary` (Gold).
- **Error State:** Use `error` (#FFB4AB). The helper text should be preceded by a small geometric "X" icon.

### Additional Signature Components
- **The Grain Overlay:** A global `div` with a fixed position, 100vw/100vh, and a repeating noise SVG at 3% opacity. This binds the digital interface to the "raw" physical aesthetic.
- **The Progress Ember:** A custom scroll progress bar at the top of the page using a gradient of `dark_crimson` to `gold_accent`.

---

## 6. Do’s and Don’ts

### Do:
- **Use Asymmetry:** Place a large headline on the left and a small label on the far right. Let the eye travel.
- **Embrace the Grain:** High-end photography should have a slight cinematic film grain.
- **Stack Surfaces:** Use the full range of `surface-container` tokens to create a "nested" UI.

### Don’t:
- **Don't Round Corners:** All `border-radius` values must remain `0px`. Roundness contradicts the "Fearless/Raw" brand pillar.
- **Don't Use Dividers:** Never use a horizontal rule `<hr>` to separate content. Use the Spacing Scale.
- **Don't Use Pure White:** It breaks the cinematic immersion. Always use the `off-white/cream` (#F5F0E8) token.
- **Don't Over-Animate:** Animations should be "heavy" and deliberate (slow eases), mirroring the movement of a large predator. Avoid "bouncy" or "playful" transitions.