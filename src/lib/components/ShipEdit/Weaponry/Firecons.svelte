<ShipItem {...reqs}>
  <Field label="firecons">
    <input type="number" class="short" bind:value={stations} />
  </Field>
</ShipItem>

<script>
import { getContext } from 'svelte';
  import ShipItem from "$lib/components/ShipItem/index.svelte";
  import Field from "$lib/components/Field/index.svelte";

  export let stations = 0;
  export let reqs = {};

  const { dispatch } = getContext('ship');

  $: dispatch.setFirecons(stations);
</script>

<style>
</style>
