<div>
  <h2>{label}</h2>
  <hr />
</div>

<slot />

<script>
  export let label;
</script>

<style>
  div {
    display: flex;
    grid-column: 1 / span 3 !important;
    align-items: baseline;
    gap: 1em;
    margin-bottom: 1em;
    background-color: var(--primary-background);
  }
  h2 {
    font-weight: bold;
    font-size: var(--font-scale-12);
  }
  hr {
    flex: 1;
    background: #333;
    border-top: 1px solid black;
  }
</style>
