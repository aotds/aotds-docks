<ShipItem {cost} {mass}>
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
  export let cost = 0;
  export let mass = 0;

  $: ship?.dispatch_action("set_cargo", space);

</script>

<style>
  input {
    width: 5em;
  }

</style>
