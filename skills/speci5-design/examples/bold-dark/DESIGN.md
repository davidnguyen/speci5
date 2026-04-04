# Bold Dark

> A high-contrast dark design system for developer tools and data-heavy applications — vivid accent colors, deep surfaces, and bold typographic hierarchy.

---

## Colors

### Brand
- **Primary** `#A78BFA`: CTAs, links, active nav items, focus rings
- **Primary Hover** `#7C3AED`: Hovered or pressed primary elements
- **Secondary** `#1E1B4B`: Tinted backgrounds for selected rows, active sidebar items

### Neutrals
- **Background** `#0F0F11`: Page background, outermost shell
- **Surface** `#1A1A1F`: Cards, modals, panels, input backgrounds
- **Surface Raised** `#24242B`: Dropdowns, popovers, hover rows
- **Border** `#2E2E36`: Dividers, input borders, table lines
- **Text Primary** `#F4F4F5`: Body text, headings, labels
- **Text Secondary** `#A1A1AA`: Captions, placeholders, muted labels, helper text

### Semantic
- **Success** `#34D399`: Confirmation messages, valid states, success badges
- **Warning** `#FBBF24`: Cautionary alerts, partial completion indicators
- **Danger** `#F87171`: Error states, destructive action buttons, validation errors
- **Info** `#60A5FA`: Informational banners, tooltips, help icons

---

## Typography

- **Font Family**: `Geist`, fallback: `ui-sans-serif, system-ui, sans-serif`
- **Headline** (`h1`): `2.25rem (36px)`, weight `800`, line-height `1.15`
- **Subheading** (`h2`): `1.5rem (24px)`, weight `700`, line-height `1.25`
- **Section Title** (`h3`): `1.125rem (18px)`, weight `600`, line-height `1.4`
- **Body** (`p`): `0.9375rem (15px)`, weight `400`, line-height `1.65`
- **Small / Caption**: `0.75rem (12px)`, weight `400`, line-height `1.5`
- **Code / Mono**: `Geist Mono`, `0.875rem (14px)`

---

## Spacing

Base unit: `4px`

| Token | Value  | Usage                          |
|-------|--------|--------------------------------|
| `xs`  | `4px`  | Tight gaps, icon padding       |
| `sm`  | `8px`  | Component internal padding     |
| `md`  | `16px` | Section padding, card gaps     |
| `lg`  | `32px` | Layout section spacing         |
| `xl`  | `56px` | Page-level spacing             |

---

## Components

### Button
- **Primary**: bg `#7C3AED`, text `#FFFFFF`, border-radius `6px`, padding `8px 16px`
- **Secondary**: bg `transparent`, text `#A78BFA`, border `1px #A78BFA`, border-radius `6px`
- **Destructive**: bg `#7F1D1D`, text `#F87171`, border: `1px #F87171`, border-radius `6px`
- **Disabled**: opacity `0.35`, cursor `not-allowed`

### Input
- Border: `1px #2E2E36`, border-radius `6px`, padding `8px 12px`, bg `#1A1A1F`, text `#F4F4F5`
- Focus ring: `2px #A78BFA` outline, offset `2px`
- Error state: border `#F87171`, message text `#F87171`

### Card
- Background: `#1A1A1F`, border: `1px #2E2E36`, border-radius `10px`, padding `24px`

### Badge / Tag
- Pill shape, padding `2px 8px`, font-size `12px`
- Variants map to semantic colors (success, warning, danger, info) at 15% opacity background with full-opacity text

---

## Elevation

| Level | Value | Usage                                                |
|-------|-------|------------------------------------------------------|
| `0`   | none  | Flat, inline elements                                |
| `1`   | `0 1px 4px rgba(0,0,0,0.4)` | Cards, list panels          |
| `2`   | `0 4px 16px rgba(0,0,0,0.6)` | Modals, command palette    |
| `3`   | `0 8px 32px rgba(0,0,0,0.8)` | Toasts, floating overlays  |

---

## Guidelines

### Do
- Use `Primary` (`#A78BFA`) for all interactive elements — the accent should stand out clearly against dark surfaces.
- Layer surfaces — use `Background` → `Surface` → `Surface Raised` to create depth hierarchy without heavy shadows.
- Prefer semantic colors at reduced opacity (15% bg) for status badges to avoid visual noise.
- Use `Text Secondary` for anything that doesn't require immediate attention.

### Don't
- Don't use white (`#FFFFFF`) as text on `Background` — use `Text Primary` (`#F4F4F5`) to avoid harshness.
- Don't use shadows lighter than level `1` — they won't be visible on dark backgrounds.
- Don't use more than two accent colors in the same view — `Primary` should dominate.
- Don't use pure black (`#000000`) as a background — `#0F0F11` reduces eye strain.

### Tone & Voice
Powerful and focused, built for people who live in the tool all day. High contrast makes information legible at a glance. Accents are vivid but purposeful — used only where action is required.
