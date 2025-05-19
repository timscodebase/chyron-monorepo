<script lang="ts">
  import { onMount } from 'svelte';

  type Props = {
    logoSize?: number | string;
    logoUrl?: string;
    logoAlt?: string;
  };

  let { logoSize = 175, logoUrl = '', logoAlt = 'Logo' } = $props() as Props;

  let currentIndex = 0;
  const elements = [
    () => new Date().toLocaleDateString(), // e.g., "5/13/2025"
    () => new Date().toLocaleDateString('en-US', { weekday: 'long' }), // e.g., "Tuesday"
    () =>
      new Date().toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      }), // e.g., "08:00:00 PM"
  ];

  let currentContent = $state(elements[currentIndex]());
  let textElement: HTMLParagraphElement;
  let isAnimating = false;

  function animateFLIP() {
    if (isAnimating || !textElement) return;
    isAnimating = true;

    // Capture initial state
    const first = textElement.getBoundingClientRect();

    // Update content
    currentIndex = (currentIndex + 1) % elements.length;
    currentContent = elements[currentIndex]();

    // Ensure layout is updated before capturing final state
    requestAnimationFrame(() => {
      // Capture final state
      const last = textElement.getBoundingClientRect();

      // Calculate differences (invert)
      const deltaX = first.left - last.left;
      const deltaY = first.top - last.top;
      const deltaW = first.width / last.width;
      const deltaH = first.height / last.height;

      // Apply initial transform and opacity
      textElement.style.transition = 'none';
      textElement.style.transform = `translate(${deltaX}px, ${deltaY + 10}px) scale(${deltaW}, ${deltaH})`;
      textElement.style.opacity = '0';

      // Trigger animation
      requestAnimationFrame(() => {
        // Apply final state with transition
        textElement.style.transition = 'transform 0.3s ease-in-out, opacity 0.3s ease-in-out';
        textElement.style.transform = 'translate(0, 0) scale(1, 1)';
        textElement.style.opacity = '1';

        // Cleanup after animation
        textElement.addEventListener(
          'transitionend',
          () => {
            textElement.style.transition = '';
            textElement.style.transform = '';
            isAnimating = false;
          },
          { once: true }
        );
      });
    });
  }

  onMount(() => {
    const interval = setInterval(animateFLIP, 5000);
    return () => clearInterval(interval);
  });
</script>

<div class="logo-and-date">
  <div class="image-container">
    <img src="{logoUrl}/{logoSize}x{logoSize}" alt={logoAlt} />
  </div>
  <p bind:this={textElement}>{currentContent}</p>
</div>

<style>
  .logo-and-date {
    grid-area: logo;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: var(--size-border-width, 4px);
    border-radius: var(--size-border-radius, 8px);
    color: var(--color-text-light, #ffffff);
    background-color: var(--color-logo-surface, #1a1a1a);
    border: var(--border-logo, 2px solid #333);
    box-shadow: var(--shadow);
  }

  .image-container {
    position: relative;
    display: inline-block;
  }

  .image-container img {
    width: 100%;
    max-width: var(--logo-size, 175px);
    height: auto;
    display: block;
  }

  .image-container::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
  }

  p {
    margin: 0.5rem 0 0 0;
    font-size: 1.5rem;
    min-width: 150px;
    text-align: center;
    will-change: transform, opacity;
  }
</style>