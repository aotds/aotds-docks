<ShipItem {...reqs}>
  <Field label="cargo">
    <input type="number" min="0" bind:value={space} />
  </Field>
</ShipItem>

<script>
  import ShipItem from "$lib/components/ShipItem/index.svelte";
  import Field from "$lib/components/Field/index.svelte";

  import { getContext } from "svelte";

  export let ship = getContext("ship");

  export let space = 0;
  export let reqs = {};

  $: ship.dispatch.setCargo(space);
</script>

<style>
  input {
    width: 5em;
  }
</style>
