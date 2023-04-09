<ShipItem {...reqs}>
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
  import ShipItem from "$lib/components/ShipItem.svelte";
  import Field from "$lib/components/Field.svelte";

  import { getContext } from "svelte";

  export let type = "none";
  export let reqs = {};

  export let api = getContext("api");

  $: api?.dispatch?.setStreamlining?.(type);
</script>

<style>
  div {
    display: flex;
  }
  label {
    margin-left: 1em;
  }
</style>
