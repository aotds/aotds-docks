<ShipItem {...reqs}>
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
  import { squadronTypes } from "$lib/shipDux/carrier.js";

  const types = squadronTypes.map(({ type }) => type);

  export let id = 1;
  export let type = types[0].type;
  export let reqs= {};

  export let { dispatch } = getContext("ship");

  $: console.log(type)
$: dispatch.setSquadronType({type, id});

</script>

<style>
select {
    width: inherit;
}
</style>
