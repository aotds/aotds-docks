<main>
  <Identification {...ship.identification} />
</main>

<script>
  import Identification from "./ShipEdit/Identification.svelte";

  export let ship = {
    identification: {},
  };
</script>

<style>
  main {
    width: var(--main-width);
    margin-left: auto;
    margin-right: auto;
  }
</style>
