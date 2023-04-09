<ShipItem {...reqs}>
  <Field label="firecons">
    <input type="number" class="short" bind:value={stations} />
  </Field>
</ShipItem>

<script>
  import { getContext } from "svelte";
  import ShipItem from "$lib/components/ShipItem.svelte";
  import Field from "$lib/components/Field.svelte";

  export let stations = 0;
  export let reqs = {};

  export let api = getContext("api");

  $: api?.dispatch?.setFirecons?.(stations);
</script>

<style>
</style>
