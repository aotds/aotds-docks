<ShipItem {...reqs}>
  <div>streamlining</div>
  <div class="field middle-align">
    <label class="radio">
      <input type="radio" bind:group={type} value="none" />
      <span>none</span></label
    >
    <label class="radio">
      <input type="radio" bind:group={type} value="partial" />
      <span>partial</span></label
    >
    <label class="radio">
      <input type="radio" bind:group={type} value="full" />
      <span>full</span></label
    >
  </div>
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
    margin-left: 2em !important;
  }
</style>
