<ShipItem {...reqs}>
  <Field label="hull">
    <input class="short" bind:value={rating} type="number" {min} {max} />
  </Field>
</ShipItem>

<script>
  import { getContext } from "svelte";

  import ShipItem from "$lib/components/ShipItem.svelte";
  import Field from "$lib/components/Field.svelte";

  export let rating = 0;
  export let reqs = {};
  export let min = 0;
  export let max = 1;

  const api = getContext("api");

  $: api.dispatch?.setHull?.(rating);
</script>

<style>
  input {
    width: 5em;
  }
</style>
