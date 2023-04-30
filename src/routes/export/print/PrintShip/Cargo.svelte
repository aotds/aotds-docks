{#if space}
  <div class="grid">
    <div class="s2">cargo</div>
    <div class="s10">
      {#each Array.from({ length: space }) as _, i (i)}
        <div class="cell" />
      {/each}
    </div>
  </div>
{/if}

<script>
  export let space;
</script>

<style>
  .cell {
    display: inline-block;
    margin-right: 0.5em;
    margin-top: 0.5em;
    width: 1.5em;
    height: 1.5em;
    border: 1px solid black;
  }
  div.s2 {
    margin-top: 0.5em;
    text-align: right;
  }
  div.m9 {
    display: flex;
    flex-wrap: wrap;
  }
</style>
