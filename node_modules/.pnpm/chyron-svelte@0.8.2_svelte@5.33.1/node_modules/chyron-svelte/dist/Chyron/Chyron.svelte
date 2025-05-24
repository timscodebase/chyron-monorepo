<script lang="ts">
  import { onMount } from 'svelte';

  let { headlines = [] } = $props() as { headlines: string[] };
</script>

<div class="chyron">
  <div class="scroll-container">
    {#each [0, 1] as _}
      {#each headlines as headline, index}
        <span class="headline">{headline}</span>
        {#if index < headlines.length - 1}
          <span class="separator">&nbsp;&brvbar;&nbsp;</span>
        {/if}
      {/each}
    {/each}
  </div>
</div>

<style>
  .chyron {
    grid-area: chyron;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--color-chyron-surface);
    border: var(--border-chyron);
    color: var(--color-text-light);
    font-size: 1.5rem;
    border-radius: var(--size-border-radius);
    overflow: hidden;
    white-space: nowrap;
    box-shadow: var(--double-shadow);
  }

  .scroll-container {
    display: inline-flex;
    animation: scroll 60s linear infinite;
  }

  .headline {
    display: inline-block;
    font-size: 2rem;
    margin: 0;
    padding: 0 var(--spacing-unit);
  }

  .separator {
    display: inline-flex;
    align-items: center;
    font-size: 2rem; /* Match headline font size */
    color: var(--color-chyron-separator);
    padding: 0 calc(var(--spacing-unit) / 2);
  }

  .chyron:hover .scroll-container {
    animation-play-state: paused;
  }

  @keyframes scroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%); /* Move half the width for seamless loop */
    }
  }
</style>