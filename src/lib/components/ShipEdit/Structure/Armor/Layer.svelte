<Field label={`layer ${layer}`}>
  <input class="short" type="number" min="0" bind:value={rating} />
</Field>

<script>
  import { getContext } from "svelte";

  import Field from "$lib/components/Field.svelte";

  export let layer = 1;
  export let rating = 0;

  export let api = getContext("api");

  $: api?.dispatch?.setArmorRating?.(layer, rating);
</script>

<style>
  input {
    width: 5em;
  }
</style>
