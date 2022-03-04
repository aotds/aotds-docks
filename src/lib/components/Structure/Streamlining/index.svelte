<ShipItem {cost} {mass}>
  <Field label="streamlining">
    <div>
      <label>
        <input type="radio" bind:group={type} value="none" />
        none</label
      >
      <label>
        <input type="radio" bind:group={type} value="partial" />
        partial</label
      >
      <label>
        <input type="radio" bind:group={type} value="full" />
        full</label
      >
    </div>
  </Field>
</ShipItem>

<script>
  import ShipItem from "$lib/components/ShipItem/index.svelte";
  import Field from "$lib/components/Field/index.svelte";

  import { getContext } from "svelte";

  export let type = "none";
  export let cost = 0;
  export let mass = 0;
  export let ship = getContext("ship");

  $: ship?.dispatch_action("set_streamlining", type);
</script>

<style>
  div {
    display: flex;
  }
  label {
    margin-left: 1em;
  }
</style>
