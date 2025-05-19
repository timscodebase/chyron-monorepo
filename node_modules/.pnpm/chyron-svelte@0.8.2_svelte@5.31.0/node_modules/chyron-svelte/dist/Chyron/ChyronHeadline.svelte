<script lang="ts">
  import { onMount } from 'svelte';

  interface Props {
    headlines: string[];
  }

  let { headlines = [] } = $props() as Props;

  // Reactive variables for headline and chyron
  let currentHeadline = $state(headlines[Math.floor(Math.random() * headlines.length)]);

  onMount(() => {
    // Update headline every 5 seconds
    const headlineInterval = setInterval(() => {
      currentHeadline = headlines[Math.floor(Math.random() * headlines.length)];
    }, 5000);

    return () => {
      clearInterval(headlineInterval);
    };
  });
</script>

<div class="headline">
  <p>{currentHeadline}</p>
</div>

<style>
  .headline {
    grid-area: headline;
    align-content: center;
    background-color: var(--color-headline-surface);
    border: var(--border-header);
    border-radius: var(--size-border-radius);
    box-shadow: var(--shadow);

    p {
      color: var(--color-text-dark);
      font-size: var(--font-size-headline);
      font-weight: var(--font-weight-headline);
      text-align: center;
      text-transform: uppercase;
    }
  }
</style>