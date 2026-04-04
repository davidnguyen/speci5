# Minimal Light

> A clean, airy design system for SaaS products — generous whitespace, a single brand accent, and a neutral palette that keeps focus on content.

---

## Colors

### Brand
- **Primary** `#6366F1`: CTAs, links, active states, focus rings
- **Primary Hover** `#4F46E5`: Hovered or pressed primary elements
- **Secondary** `#E0E7FF`: Tinted backgrounds for selected rows, highlighted sections

### Neutrals
- **Background** `#F9FAFB`: Page background
- **Surface** `#FFFFFF`: Cards, modals, sidebars, input backgrounds
- **Border** `#E5E7EB`: Dividers, input borders, table lines
- **Text Primary** `#111827`: Body text, headings, labels
- **Text Secondary** `#6B7280`: Captions, placeholders, muted labels, helper text

### Semantic
- **Success** `#16A34A`: Confirmation messages, valid states, success badges
- **Warning** `#D97706`: Cautionary alerts, partial completion indicators
- **Danger** `#DC2626`: Error states, destructive action buttons, validation errors
- **Info** `#2563EB`: Informational banners, tooltips, help icons

---

## Typography

- **Font Family**: `Inter`, fallback: `ui-sans-serif, system-ui, sans-serif`
- **Headline** (`h1`): `2rem (32px)`, weight `700`, line-height `1.25`
- **Subheading** (`h2`): `1.5rem (24px)`, weight `600`, line-height `1.33`
- **Section Title** (`h3`): `1.125rem (18px)`, weight `600`, line-height `1.4`
- **Body** (`p`): `0.875rem (14px)`, weight `400`, line-height `1.6`
- **Small / Caption**: `0.75rem (12px)`, weight `400`, line-height `1.5`
- **Code / Mono**: `JetBrains Mono`, `0.8125rem (13px)`

---

## Spacing

Base unit: `4px`

| Token | Value  | Usage                          |
|-------|--------|--------------------------------|
| `xs`  | `4px`  | Tight gaps, icon padding       |
| `sm`  | `8px`  | Component internal padding     |
| `md`  | `16px` | Section padding, card gaps     |
| `lg`  | `24px` | Layout section spacing         |
| `xl`  | `40px` | Page-level spacing             |

---

## Components

### Button
- **Primary**: bg `#6366F1`, text `#FFFFFF`, border-radius `6px`, padding `8px 16px`
- **Secondary**: bg `#FFFFFF`, text `#374151`, border `1px #D1D5DB`, border-radius `6px`
- **Destructive**: bg `#DC2626`, text `#FFFFFF`, border-radius `6px`
- **Disabled**: opacity `0.4`, cursor `not-allowed`

### Input
- Border: `1px #D1D5DB`, border-radius `6px`, padding `8px 12px`
- Focus ring: `2px #6366F1` outline, offset `2px`
- Error state: border `#DC2626`, message text `#DC2626`

### Card
- Background: `#FFFFFF`, border: `1px #E5E7EB`, border-radius `8px`, padding `24px`

### Badge / Tag
- Pill shape, padding `2px 8px`, font-size `12px`
- Variants map to semantic colors (success, warning, danger, info)

---

## Elevation

| Level | Value | Usage                                        |
|-------|-------|----------------------------------------------|
| `0`   | none  | Flat, inline elements                        |
| `1`   | `0 1px 3px rgba(0,0,0,0.08)` | Cards, dropdowns          |
| `2`   | `0 4px 12px rgba(0,0,0,0.10)` | Modals, popovers         |
| `3`   | `0 8px 24px rgba(0,0,0,0.12)` | Toasts, floating panels  |

---

## Guidelines

### Do
- Use `Primary` exclusively for interactive elements — buttons, links, and focus states.
- Use `Surface` (`#FFFFFF`) to visually lift content above the `Background`.
- Rely on whitespace and `Border` to create separation rather than heavy shadows.
- Use `Text Secondary` for anything supporting or supplementary to the main label.

### Don't
- Don't use `Danger` for anything non-destructive or non-erroneous.
- Don't mix multiple brand accent colors — `Primary` is the only interactive color.
- Don't use shadows heavier than level `2` except for floating UI (toasts, tooltips).
- Don't reduce font size below `12px`.

### Tone & Voice
Clean and professional with generous whitespace. The UI recedes so users can focus on their data. Interactions are quiet — no bold animations or aggressive color shifts.
