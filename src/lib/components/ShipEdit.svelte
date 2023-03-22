<main>
  <Identification {...ship.identification} />
  <Propulsion {...ship.propulsion} />
</main>

<script>
  import Identification from "./ShipEdit/Identification.svelte";
  import Propulsion from "./ShipEdit/Propulsion.svelte";
  import shipDux from "$lib/store/ship";

  export let ship = shipDux.initial;
</script>

<style>
  main {
    width: var(--main-width);
    margin-left: auto;
    margin-right: auto;
  }
</style>
