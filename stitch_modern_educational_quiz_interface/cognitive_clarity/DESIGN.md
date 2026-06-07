---
name: Cognitive Clarity
colors:
  surface: '#f7f9ff'
  surface-dim: '#d7dae0'
  surface-bright: '#f7f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f1f4fa'
  surface-container: '#ebeef4'
  surface-container-high: '#e5e8ee'
  surface-container-highest: '#dfe3e8'
  on-surface: '#181c20'
  on-surface-variant: '#3f4850'
  inverse-surface: '#2d3135'
  inverse-on-surface: '#eef1f7'
  outline: '#707881'
  outline-variant: '#bfc7d2'
  surface-tint: '#006398'
  primary: '#006194'
  on-primary: '#ffffff'
  primary-container: '#007bb9'
  on-primary-container: '#fdfcff'
  inverse-primary: '#93ccff'
  secondary: '#5c5f61'
  on-secondary: '#ffffff'
  secondary-container: '#e0e3e5'
  on-secondary-container: '#626567'
  tertiary: '#894d00'
  on-tertiary: '#ffffff'
  tertiary-container: '#ac6200'
  on-tertiary-container: '#fffbff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#cce5ff'
  primary-fixed-dim: '#93ccff'
  on-primary-fixed: '#001d31'
  on-primary-fixed-variant: '#004b73'
  secondary-fixed: '#e0e3e5'
  secondary-fixed-dim: '#c4c7c9'
  on-secondary-fixed: '#191c1e'
  on-secondary-fixed-variant: '#444749'
  tertiary-fixed: '#ffdcc0'
  tertiary-fixed-dim: '#ffb875'
  on-tertiary-fixed: '#2d1600'
  on-tertiary-fixed-variant: '#6b3b00'
  background: '#f7f9ff'
  on-background: '#181c20'
  surface-variant: '#dfe3e8'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
  title-md:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.01em
  caption:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 4px
  container-padding-mobile: 16px
  container-padding-desktop: 40px
  gutter: 24px
  section-gap: 48px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 24px
---

## Brand & Style
The design system is engineered to foster an environment of "Focused Energy." It targets students who require a balance between academic rigor and psychological comfort. The brand personality is encouraging, clear, and intellectually stimulating without being overwhelming. 

The visual style utilizes **Modern Minimalism** with a **Tactile Softness**. By combining vast amounts of white space with high-chroma primary accents and extremely soft geometry, the UI feels like a premium physical notebook—clean, organized, and ready for interaction. The goal is to reduce cognitive load while maintaining high engagement through interactive-looking elements that respond to user progress.

## Colors
The palette is rooted in a "High-Focus Light Mode" architecture.
- **Primary (#0284C7):** A professional yet vibrant blue used for progress indicators, primary actions, and active states.
- **Surface & Background:** We use a dual-tone neutral approach. Pure white (#FFFFFF) is reserved for the highest level of the hierarchy (cards, inputs), while #F8FAFC acts as the canvas to create subtle separation.
- **Semantic Accents:** Success and Error states use a "Tinted Container" pattern. Backgrounds are highly desaturated pastels (#DCFCE7 for success, #FEE2E2 for error) to ensure long-form reading comfort, while the foreground text uses high-contrast shades for accessibility.

## Typography
This design system utilizes **Inter** for its exceptional legibility in digital interfaces. The typographic scale is generous, prioritizing reading stamina during long quiz sessions. 

- **Headlines:** Use tight letter spacing and heavy weights to create a strong visual anchor for lesson titles.
- **Body Text:** Set with increased line-height (1.5x minimum) to prevent "text-crowding," essential for educational retention.
- **Labels:** Use medium or semi-bold weights to distinguish interactive metadata from static content.

## Layout & Spacing
The layout follows a **Fluid-Fixed Hybrid** model. On desktop, content is capped at a 1200px max-width to maintain optimal line lengths for learning materials. 

- **Grid:** A 12-column system is used for dashboards, while a centered single-column layout (max 720px) is utilized for the actual quiz experience to maximize focus.
- **Spacing Rhythm:** Based on a 4px baseline, with most component-level spacing defaulting to 16px (stack-md) or 24px (stack-lg).
- **Mobile Adaption:** Margins shrink to 16px, and multi-column grids collapse into a single vertical stack.

## Elevation & Depth
Depth is conveyed through **Tonal Layering** supplemented by **Ambient Shadows**. 

- **Level 0 (Canvas):** #F8FAFC. The foundation of the app.
- **Level 1 (Cards/Content):** #FFFFFF. These elements use a very soft, diffused shadow: `0px 4px 20px rgba(0, 0, 0, 0.05)`. This creates a "lifted paper" effect.
- **Interactive State:** When an element is hovered or focused, the shadow intensifies slightly `(0px 8px 30px rgba(2, 132, 199, 0.12))` to provide clear feedback.
- **Outlines:** Use 1px borders in #E2E8F0 for form elements to maintain clarity without the heaviness of dark lines.

## Shapes
The shape language is defined by **High-Radius Geometry**. Standard components use 16px (1rem) corner radii, while large feature cards or containers scale up to 24px (1.5rem). This extreme roundness removes the "institutional" feel often associated with testing software, making the application feel like a friendly companion.

Buttons and selection chips utilize a fully rounded (pill) shape to emphasize their interactive nature.

## Components
- **Buttons:** Primary buttons use a solid #0284C7 fill with white text. Secondary buttons use a transparent background with a 2px #0284C7 border. All buttons have a height of 48px or 56px to provide a large tap target.
- **Quiz Cards:** White background, 1px border (#E2E8F0), 24px padding, and 16px rounded corners.
- **Selection Chips:** Used for multiple-choice answers. In the default state, they have a light gray border. When selected, the border thickens to 2px Primary Blue, and the background shifts to a 5% opacity tint of the Primary color.
- **Progress Bars:** Thick 12px tracks with a rounded cap. The "track" is #F1F5F9 and the "fill" is the Primary Teal.
- **Input Fields:** 16px rounded corners, 1px #E2E8F0 border, and #F8FAFC background. On focus, the border transitions to #0284C7.
- **Feedback Toasts:** Use the Success/Danger color logic from the Colors section, positioned top-center to ensure visibility during active learning.