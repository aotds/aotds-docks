<ShipItem {...reqs}>
  <Field label="ADFC">
    <input type="number" class="short" bind:value={rating} />
  </Field>
</ShipItem>

<script>
    import { getContext } from 'svelte';
  import ShipItem from "$lib/components/ShipItem/index.svelte";
  import Field from "$lib/components/Field/index.svelte";

  export let rating = 0;
  export let reqs = {};

  const { dispatch } = getContext('ship');

  $: dispatch.setADFC(rating);
</script>
