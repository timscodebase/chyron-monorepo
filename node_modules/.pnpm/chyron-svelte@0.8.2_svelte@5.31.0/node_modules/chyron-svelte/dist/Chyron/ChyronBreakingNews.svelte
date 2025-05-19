<script lang="ts">
  let breakingHeadline = 'Breaking News: Major Event Unfolds';
</script>

<div class="breaking-news" style:container-name="breaking-container" style:container-type="size">
  <p class="aldrich-regular breaking">BREAKING NEWS</p>
</div>

<style>
  .breaking-news {
    grid-area: breaking;
    align-content: center;
    border-radius: var(--size-border-radius);
    background-color: var(--color-breaking-news-background);
    height: 100%;
    box-shadow: var(--shadow);
  }

  .breaking {
    font-weight: var(--font-weight-breaking-news);
    color: var(--color-text-light);
    text-align: center;
    padding: 1rem 0;
    margin: 0;
    text-transform: uppercase;
    font-size: 2.5rem; 
  }
</style>