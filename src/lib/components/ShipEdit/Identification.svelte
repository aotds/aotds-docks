<div class="identification-row">
  <div>
    <Field label="ship class" bind:value={shipClass} />
    <Field label="ship type">
      <select bind:value={shipType}>
        {#each shipTypes as name (name)}
          <option>{name}</option>
        {/each}
      </select>
    </Field>
  </div>
  <ShipCost {...reqs} />
</div>

<script>
  import { getContext } from "svelte";

  import Field from "$lib/components/Field.svelte";
  import { candidateShipTypes } from "./Identification/shipTypes.js";
  import ShipCost from "./Identification/ShipCost.svelte";

  export let shipClass = "";
  export let shipType = "";
  export let isCarrier = false;
  export let reqs = {};

  export let api = getContext("api");

  $: shipTypes = candidateShipTypes(reqs.mass, isCarrier).map(
    ({ name }) => name
  );

  $: if (shipTypes.length > 0 && !shipTypes.includes(shipType))
    shipType = shipTypes[0];

  $: api?.dispatch?.updateIdentification?.({ shipType, shipClass });
</script>

<style>
  div {
    display: flex;
    align-items: end;
    gap: 2em;
  }
  .identification-row {
    display: flex;
    align-items: start;
  }

  .identification-row :global(> *:first-child) {
    flex: 1;
  }
</style>
