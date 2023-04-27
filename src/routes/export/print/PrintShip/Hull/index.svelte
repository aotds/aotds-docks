<div>
  {#each rows as row, i (i)}
    <div class="my-row">
      {#each row as threshold, j (j)}
        <div class="cell">
          {#if threshold}
            <img src="/icons/crew-star.svg" alt="crew loss threshold" />
          {/if}
        </div>
      {/each}
    </div>
  {/each}
</div>

<script>
  export let rating = 0;
  export let advanced = false;
  export let shipMass = 10;

  // TODO advanced hull?
  let nbr_rows;
  $: nbr_rows = advanced ? 3 : 4;

  let cells;
  $: cells = Array(rating).fill(false);

  let dcp;
  $: dcp = Math.ceil(shipMass / 20);

  $: cells = divide(cells, dcp)
    .map((g) => {
      g[g.length - 1] = true;
      return g;
    })
    .flat();

  function divide(list, divider) {
    if (divider <= 1) return [list];

    let div = list.length / divider;
    const mod = list.length % divider;

    if (mod) div++;

    return [list.slice(0, div), ...divide(list.slice(div), divider - 1)];
  }

  let rows = [];
  $: rows = divide(cells, nbr_rows);
</script>

<style>
  .my-row {
    margin-bottom: 0.5em;
  }
  .cell {
    display: inline-block;
    margin-right: 0.5em;
    width: 1.5em;
    height: 1.5em;
    border: 1px solid black;
  }
  img {
    width: 1em;
    margin-left: 0.2em;
  }
</style>
