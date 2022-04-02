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
  }
  h2 {
    font-weight: bold;
  }
  hr {
    flex: 1;
    background: #333;
  }
</style>
