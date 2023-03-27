<ShipItem {...reqs}>
  <Field label="ADFC">
    <input type="number" class="short" bind:value={rating} />
  </Field>
</ShipItem>

<script>
  import { getContext } from "svelte";
  import ShipItem from "$lib/components/ShipItem.svelte";
  import Field from "$lib/components/Field.svelte";

  export let rating = 0;
  export let reqs = {};

  const api = getContext("api");

  $: api?.dispatch?.setADFC?.(rating);
</script>
