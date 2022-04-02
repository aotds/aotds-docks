<ShipItem {cost} {mass}>
  <Field label="firecons">
    <input type="number" class="short" bind:value={nbr} />
  </Field>
</ShipItem>

<script>
  import { createEventDispatcher } from "svelte";
  import ShipItem from "./ShipItem/index.svelte";
  import Field from "./Field/index.svelte";

  export let nbr,
    cost,
    mass = (0, 0, 0);

  const dispatch = createEventDispatcher();
  $: dispatch("change_firecons", nbr);
</script>

<style>
</style>
