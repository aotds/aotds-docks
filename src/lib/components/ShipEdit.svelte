<main>
  <Identification {...identification} />
  <Propulsion {...propulsion} />
  <Structure {...structure} />
</main>

<script>
  import Identification from "./ShipEdit/Identification.svelte";
  import Propulsion from "./ShipEdit/Propulsion.svelte";
  import shipDux from "$lib/store/ship";
  import Structure from "./ShipEdit/Structure.svelte";

  export let identification = {};
  export let propulsion = {};
  export let structure = {};
</script>

<style>
  main {
    width: var(--main-width);
    margin-left: auto;
    margin-right: auto;
  }
</style>
