<div class="layers">
  {#each layers as layer, i (i)}
    <div class="layer">
      {#each Array.from({ length: layer }) as j}
        <div class="cell" />
      {/each}
    </div>
  {/each}
</div>

<script>
  export let layers = [];
</script>

<style>
  .cell {
    display: inline-block;
    margin-right: 0.5em;
    width: 1.4rem;
    height: 1.4rem;
    border: 1px solid black;
    border-radius: 1rem;
  }
  .layers {
    display: flex;
    flex-direction: column-reverse;
    margin-bottom: 1em;
  }
</style>
