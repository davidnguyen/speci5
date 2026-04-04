Write to `.spec/design-systems/<slug>/DESIGN.md` using this structure:

```markdown
# <Design System Name>

> <One-sentence description of the visual style and intended use.>

---

## Colors

### Brand
- **Primary** `<hex>`: <Usage — e.g., "CTAs, links, active states">
- **Primary Hover** `<hex>`: <Usage>
- **Secondary** `<hex>`: <Usage>

### Neutrals
- **Background** `<hex>`: <Usage — e.g., "Page background">
- **Surface** `<hex>`: <Usage — e.g., "Cards, modals, elevated panels">
- **Border** `<hex>`: <Usage — e.g., "Dividers, input borders">
- **Text Primary** `<hex>`: <Usage — e.g., "Body text, headings">
- **Text Secondary** `<hex>`: <Usage — e.g., "Captions, placeholders, muted labels">

### Semantic
- **Success** `<hex>`: <Usage — e.g., "Confirmation messages, valid states">
- **Warning** `<hex>`: <Usage — e.g., "Cautionary alerts">
- **Danger** `<hex>`: <Usage — e.g., "Error states, destructive actions">
- **Info** `<hex>`: <Usage — e.g., "Informational banners">

---

## Typography

- **Font Family**: `<Font Name>`, fallback: `<fallback stack>`
- **Headline** (`h1`): `<size>`, weight `<weight>`, line-height `<lh>`
- **Subheading** (`h2`): `<size>`, weight `<weight>`, line-height `<lh>`
- **Section Title** (`h3`): `<size>`, weight `<weight>`, line-height `<lh>`
- **Body** (`p`): `<size>`, weight `<weight>`, line-height `<lh>`
- **Small / Caption**: `<size>`, weight `<weight>`, line-height `<lh>`
- **Code / Mono**: `<Font Name>`, `<size>`

---

## Spacing

Base unit: `<value>` (e.g., `4px`)

| Token  | Value  | Usage                        |
|--------|--------|------------------------------|
| `xs`   | `<val>`| Tight gaps, icon padding     |
| `sm`   | `<val>`| Component internal padding   |
| `md`   | `<val>`| Section padding, card gaps   |
| `lg`   | `<val>`| Layout section spacing       |
| `xl`   | `<val>`| Page-level spacing           |

---

## Components

### Button
- **Primary**: bg `<hex>`, text `<hex>`, border-radius `<val>`, padding `<val>`
- **Secondary**: bg `<hex>`, text `<hex>`, border `1px <hex>`, border-radius `<val>`
- **Destructive**: bg `<hex>`, text `<hex>`, border-radius `<val>`
- **Disabled**: opacity `<val>`, cursor `not-allowed`

### Input
- Border: `1px <hex>`, border-radius `<val>`, padding `<val>`
- Focus ring: `2px <hex>` outline, offset `2px`
- Error state: border `<hex>`, message text `<hex>`

### Card
- Background: `<hex>`, border: `1px <hex>`, border-radius `<val>`, padding `<val>`

### Badge / Tag
- Pill shape, padding `<val>`, font-size `<val>`
- Variants map to semantic colors (success, warning, danger, info)

---

## Elevation

| Level | Value | Usage                                |
|-------|-------|--------------------------------------|
| `0`   | none  | Flat, no shadow                      |
| `1`   | `<shadow-css>` | Cards, dropdowns           |
| `2`   | `<shadow-css>` | Modals, popovers           |
| `3`   | `<shadow-css>` | Toasts, floating elements  |

---

## Guidelines

### Do
- <Positive guidance — e.g., "Use Primary color exclusively for interactive elements.">
- <Positive guidance>
- <Positive guidance>

### Don't
- <Negative guidance — e.g., "Don't use Danger color for anything non-destructive.">
- <Negative guidance>
- <Negative guidance>

### Tone & Voice
<One or two sentences describing the visual personality — e.g., "Clean and professional with generous whitespace. Interactions are subtle — no heavy animations or aggressive color.">
```
