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

<script>
  import { getContext } from "svelte";

  import Field from "$lib/components/Field/index.svelte";
  import { candidateShipTypes } from "./shipTypes.js";

  export let shipClass = "";
  export let shipType = "";
  export let mass = 10;
  export let isCarrier = false;

  const ship = getContext("ship");

  $: shipTypes = candidateShipTypes(mass, isCarrier).map(({ name }) => name);

  $: if (shipTypes.length > 0 && !shipTypes.includes(shipType))
    shipType = shipTypes[0];

  $: ship.dispatch.setShipType(shipType);
  $: ship.dispatch.setShipClass(shipClass);
</script>

<style>
  div {
    display: flex;
    align-items: end;
    gap: 2em;
  }
</style>
