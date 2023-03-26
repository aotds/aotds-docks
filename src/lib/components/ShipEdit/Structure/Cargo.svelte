<ShipItem {...reqs}>
  <Field label="cargo">
    <input class="short" type="number" min="0" bind:value={space} />
  </Field>
</ShipItem>

<script>
  import ShipItem from "$lib/components/ShipItem.svelte";
  import Field from "$lib/components/Field.svelte";

  import { getContext } from "svelte";

  export let api = getContext("api");

  export let space = 0;
  export let reqs = {};

  $: api?.dispatch?.setCargo?.(space);
</script>

<style>
  input {
    width: 5em;
  }
</style>
