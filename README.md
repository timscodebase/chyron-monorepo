# Chyron Mono Repo

The over arching repo for `svelte-chyron`: the library, and `try-chyron`: the landing page.

## Chyron-Svelte

Path `packages/chyron-svelte`:

### Features

- **Scrolling Chyron**: Smoothly scrolls headlines with customizable separators (e.g., vertical ellipsis via Iconify).
- **Dynamic Headline**: Cycles through headlines with fade transitions.
- **Logo with Date/Time**: Displays a logo alongside rotating date, weekday, or time.
- **Theme-able Styling**: Customize colors, fonts, and sizes using CSS variables (e.g., `--color-chyron-surface`, `--font-family-headline`).
- **TypeScript Support**: Fully typed for robust development.
- **Responsive Design**: Grid-based layout adapts to various screen sizes.
- **Accessible**: Includes ARIA attributes for screen reader compatibility.

### Todos

- [ ] Logo
- [ ] Theme system
- [ ] Ability to accept custom css
- [ ] Better grid layout
- - [ ] Re-sizeable
- - [ ] Ability to add additional panels

## Try-Chyron

Path `apps/try-chyron`:

### Features

- GSAP Animations
- Basic responsive layout
- Working demo

### Todos

- [ ] Light/Dark theme
- [ ] Better overall layout
- [ ] SEO/Keywords, etc
