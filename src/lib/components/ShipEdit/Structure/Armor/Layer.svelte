<Field label={`layer ${layer}`}>
  <input type="number" min="0" bind:value={rating} />
</Field>

<script>
  import { getContext } from "svelte";

  import Field from "$lib/components/Field/index.svelte";

  export let layer = 1;
  export let rating = 0;

  const ship = getContext("ship");

  $: ship.dispatch.setArmorRating({ layer, rating });
</script>

<style>
  input {
    width: 5em;
  }
</style>
