<ShipItem {cost} {mass}>
  <Field label={`squadron ${id}`}>
    <select bind:value={type}>
      {#each types as type (type)}
        <option>{type}</option>
      {/each}
    </select>
  </Field>
</ShipItem>

<script>
  import { getContext } from "svelte";

  import Section from "$lib/components/Section/index.svelte";
  import Field from "$lib/components/Field/index.svelte";
  import ShipItem from "$lib/components/ShipItem/index.svelte";
  import dux from "$lib/dux/carrier";
  import squadron_types from "$lib/dux/carrier/squadron_types";

  const types = squadron_types.map(({ type }) => type);

  export let id = 1;
  export let type = "standard";
  export let ftl = false;
  export let cost = 0;
  export let mass = 0;

  export let ship = getContext("ship");

  $: ship?.dispatch_action("set_squadron", { id, type });
</script>

<style>
  div {
    background-color: red;
  }
</style>
