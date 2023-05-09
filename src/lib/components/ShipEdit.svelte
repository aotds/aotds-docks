<Identification {...identification} />
<Propulsion {...propulsion} />
<Structure {...structure} />
<Weaponry {...weaponry} />

{#if identification.isCarrier}
  <Carrier {...carrier} />
{/if}

<script>
  import { getContext } from "svelte";

  import Identification from "./ShipEdit/Identification.svelte";
  import Propulsion from "./ShipEdit/Propulsion.svelte";
  import shipDux from "$lib/store/ship";
  import Structure from "./ShipEdit/Structure.svelte";
  import Weaponry from "./ShipEdit/Weaponry.svelte";
  import Carrier from "./ShipEdit/Carrier.svelte";

  export let identification = {};
  export let propulsion = {};
  export let structure = {};
  export let weaponry = {};
  export let carrier = {};

  const api = getContext("api");
</script>

<style>
  main {
    width: var(--main-width);
    margin-left: auto;
    margin-right: auto;
  }
  .reset {
  }
</style>
