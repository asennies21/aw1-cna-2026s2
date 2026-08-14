---
name: Masa Madre Global Style
colors:
  surface: '#fbf9f5'
  surface-dim: '#dbdad6'
  surface-bright: '#fbf9f5'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f3ef'
  surface-container: '#efeeea'
  surface-container-high: '#eae8e4'
  surface-container-highest: '#e4e2de'
  on-surface: '#1b1c1a'
  on-surface-variant: '#4e453e'
  inverse-surface: '#30312e'
  inverse-on-surface: '#f2f0ed'
  outline: '#80756d'
  outline-variant: '#d2c4bb'
  surface-tint: '#705a49'
  primary: '#322214'
  on-primary: '#ffffff'
  primary-container: '#4a3728'
  on-primary-container: '#bba08c'
  inverse-primary: '#dec1ac'
  secondary: '#735c00'
  on-secondary: '#ffffff'
  secondary-container: '#fed65b'
  on-secondary-container: '#745c00'
  tertiary: '#1a281c'
  on-tertiary: '#ffffff'
  tertiary-container: '#303e30'
  on-tertiary-container: '#99a997'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#fbddc7'
  primary-fixed-dim: '#dec1ac'
  on-primary-fixed: '#28180b'
  on-primary-fixed-variant: '#574333'
  secondary-fixed: '#ffe088'
  secondary-fixed-dim: '#e9c349'
  on-secondary-fixed: '#241a00'
  on-secondary-fixed-variant: '#574500'
  tertiary-fixed: '#d6e7d4'
  tertiary-fixed-dim: '#bacbb8'
  on-tertiary-fixed: '#111f13'
  on-tertiary-fixed-variant: '#3c4a3c'
  background: '#fbf9f5'
  on-background: '#1b1c1a'
  surface-variant: '#e4e2de'
typography:
  display-lg:
    fontFamily: Libre Caslon Text
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Libre Caslon Text
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-lg-mobile:
    fontFamily: Libre Caslon Text
    fontSize: 28px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Libre Caslon Text
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Manrope
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Manrope
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-md:
    fontFamily: Manrope
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1.4'
    letterSpacing: 0.05em
  status-label:
    fontFamily: Manrope
    fontSize: 12px
    fontWeight: '700'
    lineHeight: '1'
    letterSpacing: 0.02em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1280px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 48px
  stack-sm: 12px
  stack-md: 24px
  stack-lg: 48px
---

## Brand & Style
The brand personality is rooted in the "Masa Madre" (Sourdough) philosophy: patience, craft, and organic growth. The UI evokes a tactile, sensory experience akin to a high-end bakery—warmth, the smell of fresh bread, and the precision of an artisan.

The design style is **Modern Organic**. It blends minimalist layout principles with tactile warmth. It prioritizes high-quality food photography and generous whitespace to create a premium, calm shopping environment. The emotional response should be one of comfort, trust, and hunger-inducing elegance.

## Colors
The palette is inspired by the baking process:
- **Primary (Crust Brown):** #4A3728. Used for primary typography and deep grounding elements.
- **Secondary (Wheat Gold):** #D4AF37. Used for highlights, primary CTAs, and accents.
- **Tertiary (Sage Green):** #849483. Used for subtle organic accents and eco-friendly indicators.
- **Neutral (Creamy Off-White):** #FDFBF7. The primary background color to avoid the sterile feel of pure white.

**Status Indicators:**
- **In Stock:** A deep olive-sage (#4B6344) to signal abundance and health.
- **Low Stock:** A toasted amber (#B07D4E) to create urgency without the harshness of a standard "danger" red.

## Typography
This design system utilizes a high-contrast pairing of **Libre Caslon Text** for an authoritative, editorial feel and **Manrope** for modern, legible utility.

- **Headlines:** Use Libre Caslon Text for all titles. It provides the "artisanal" character and literary weight required for a premium brand.
- **Body & UI:** Use Manrope. It offers a clean, neutral counterpoint to the serif, ensuring product descriptions and checkout flows are effortless to read.
- **Labels:** Use uppercase Manrope with slight letter-spacing for categorization and meta-data to create a distinct visual hierarchy.

## Layout & Spacing
The layout follows a **Fixed Grid** philosophy on desktop to maintain an editorial, magazine-like feel, centering the content at a maximum width of 1280px.

- **Rhythm:** An 8px base unit drives all spacing. Use `stack-lg` (48px) for separating major sections to ensure "generous whitespace."
- **Desktop:** 12-column grid with 24px gutters. Use wide margins (48px+) to frame content like a gallery.
- **Mobile:** 4-column grid with 16px margins. Content should stack vertically with consistent padding to maintain the organic flow.

## Elevation & Depth
In alignment with the rustic aesthetic, depth is achieved through **Tonal Layers** and **Subtle Textures** rather than heavy shadows.

- **Surfaces:** Use slightly darker cream tones (#F5F2ED) for container backgrounds to sit "below" the primary surface.
- **Shadows:** When needed for interactivity (like a hovering card), use very soft, amber-tinted shadows (e.g., `rgba(74, 55, 40, 0.08)`) with a high blur radius (20px+) to mimic natural ambient light.
- **Photography:** Food images should have a slight natural grain or paper texture overlay to enhance the "artisanal" tactile quality.

## Shapes
The shape language is **Rounded**, reflecting the soft, hand-formed nature of bread dough. 

- **Cards and Containers:** Use `rounded-lg` (1rem/16px) to maintain a friendly and premium feel.
- **Interactive Elements:** Buttons and input fields should use `rounded-md` (0.5rem/8px). 
- **Icons:** Use rounded caps and joins to match the typography's soft curves. Avoid sharp 90-degree corners in all UI decorative elements.

## Components
- **Buttons:** Primary buttons use the Crust Brown background with Cream text. Secondary buttons use an outline of Crust Brown. For a "premium" touch, buttons have a subtle 1px inner highlight on the top edge.
- **Chips (Status):** 
    - *In Stock:* Sage green background at 15% opacity with dark sage text.
    - *Low Stock:* Wheat gold background at 15% opacity with toasted amber text.
- **Input Fields:** Minimalist design. A bottom border of 1.5px in Crust Brown (low opacity) that bolds on focus. No heavy boxes.
- **Cards:** Product cards use a subtle "ghost" border (1px solid #EAE4D8) with no shadow. Shadows only appear on hover to indicate tactility.
- **Lists:** Ingredient or feature lists should use a custom "grain" bullet point—a small, slightly irregular circle—to reinforce the organic theme.
- **Baskets/Cart:** Use a slide-over panel with a soft backdrop blur to keep the user focused on the shopping experience while providing a sense of physical layering.