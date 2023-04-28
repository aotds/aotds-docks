<div>
  {#each weapons as weapon (weapon.id)}
    <svelte:component this={printComps[weapon.specs.type]} {...weapon.specs} />
  {/each}
</div>

<script>
  import printComps from "./printComps.js";

  export let weapons = [];
</script>

<style>
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
</style>
