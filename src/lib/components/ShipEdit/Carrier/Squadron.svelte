<ShipItem {...reqs}>
  <div class="field label suffix">
    <select bind:value={type}>
      {#each types as type (type)}
        <option>{type}</option>
      {/each}
    </select>
    <label class="active">squadron {id}</label>
    <i>arrow_drop_down</i>
  </div></ShipItem
>

<script>
  import { getContext } from "svelte";

  import Section from "$lib/components/Section.svelte";
  import Field from "$lib/components/Field.svelte";
  import ShipItem from "$lib/components/ShipItem.svelte";
  import { squadronTypes } from "$lib/store/ship/carrier.ts";

  const types = squadronTypes.map(({ type }) => type);

  export let id = 1;
  export let type = ""; //types[0].type;
  export let reqs = {};

  export let { dispatch } = getContext("api");

  $: dispatch.setSquadronType({ type, id });
</script>

<style>
  select {
    /* width: inherit; */
  }
  div {
    display: inline-block;
  }
</style>
