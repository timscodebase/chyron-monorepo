# Chyron Svelte

A Svelte library for creating customizable news tickers (chyrons) with scrolling headlines, dynamic logos, and headline displays. Built with SvelteKit and TypeScript, `chyron-svelte` is perfect for broadcast-style interfaces, news websites, or applications needing a dynamic ticker.

**Current Version**: 0.2.5

## Features

- **Scrolling Chyron**: Smoothly scrolls headlines with customizable separators (e.g., vertical ellipsis via Iconify).
- **Dynamic Headline**: Cycles through headlines with fade transitions.
- **Logo with Date/Time**: Displays a logo alongside rotating date, weekday, or time.
- **Theme-able Styling**: Customize colors, fonts, and sizes using CSS variables (e.g., `--color-chyron-surface`, `--font-family-headline`).
- **TypeScript Support**: Fully typed for robust development.
- **Responsive Design**: Grid-based layout adapts to various screen sizes.
- **TODO** ~~**Accessible**: Includes ARIA attributes for screen reader compatibility.~~

## Installation

Install the library via npm:

```bash
npm install chyron-svelte
```

## Ensure the Iconify library is included for icon support (used in Chyron.svelte):


### HTML Head

```html
<script src="https://code.iconify.design/3/3.1.0/iconify.min.js"></script>
```

### *Alternatively, install the Svelte Iconify package for better integration:*

```bash
npm install @iconify/svelte
```

#### `+layout.svelte`

```svelte
<script lang='ts'>
  import 'iconify-icon';
  ...
</script>
```

### Usage
Import and use the `ChyronWrapper` component to combine all features, or use individual components (`Chyron`, `ChyronHeadline`, `ChyronLogo`) for specific needs.

### Basic Example

```svelte
<script>
  import { ChyronWrapper } from 'chyron-svelte';

  const headlines = [
    'Breaking News: Major Event Unfolds',
    'Sports Update: Team Wins Championship',
    'Weather Alert: Severe Storms Expected'
  ];
</script>

<ChyronWrapper
  headline={true}
  headlines={headlines}
  logo={true}
  logoLeft={true}
  chyron={true}
  logoUrl="https://placehold.co"
  logoAlt="News Logo"
  logoSize={150}
/>
```

This renders a chyron with:
A scrolling ticker (`Chyron`) showing headlines separated by vertical ellipsis icons.

A cycling headline section (`ChyronHeadline`).

A logo with rotating date/time (`ChyronLogo`).




