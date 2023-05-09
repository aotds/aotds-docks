<div class="identification-row">
  <div>
    <Field label="ship class" bind:value={shipClass} />
    <Field suffix>
      <select bind:value={shipType}>
        {#each shipTypes as name (name)}
          <option>{name}</option>
        {/each}
      </select>
      <label class="active">ship type</label>
      <i>arrow_drop_down</i>
    </Field>
    <label class="switch icon">
      <div>carrier</div>
      <input type="checkbox" bind:checked={isCarrier} />
      <span>
        <i>airplanemode_inactive</i>
        <i>airplanemode_active</i>
      </span>
    </label>
  </div>
  <ShipCost {...reqs} />
</div>

<script>
  import { getContext } from "svelte";

  import Field from "$lib/components/Field.svelte";
  import { candidateShipTypes } from "./Identification/shipTypes.js";
  import ShipCost from "./Identification/ShipCost.svelte";
  import shipDux from "$lib/store/ship";

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

  $: api?.dispatch.setCarrier?.(isCarrier);
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
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
  select {
    min-width: 10em;
  }

  .identification-row :global(> *:first-child) {
    flex: 1;
  }
  label div {
    font-size: var(--font-scale-10);
    margin-right: 1em;
  }
  label.switch {
    margin-left: 2em;
  }
</style>
