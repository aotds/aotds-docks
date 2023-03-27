<main>
  <Identification {...identification} />
  <Propulsion {...propulsion} />
  <Structure {...structure} />
  <Weaponry {...weaponry} />
</main>

<script>
  import Identification from "./ShipEdit/Identification.svelte";
  import Propulsion from "./ShipEdit/Propulsion.svelte";
  import shipDux from "$lib/store/ship";
  import Structure from "./ShipEdit/Structure.svelte";
  import Weaponry from "./ShipEdit/Weaponry.svelte";

  export let identification = {};
  export let propulsion = {};
  export let structure = {};
  export let weaponry = {};
</script>

<style>
  main {
    width: var(--main-width);
    margin-left: auto;
    margin-right: auto;
  }
</style>
