  <ShipItem {...reqs}>
    <Field label="hull">
      <input class="short" bind:value={rating} type="number" {min} {max} />
    </Field>
  </ShipItem>

<script>
  import { getContext } from "svelte";

  import ShipItem from '$lib/components/ShipItem/index.svelte';
  import Field from '$lib/components/Field/index.svelte';

  export let rating = 0;
  export let reqs = {};
  export let min = 0;
  export let max = 1;

  const ship = getContext('ship');

  $: ship.dispatch.setHull(rating);
</script>

<style>
  input {
    width: 5em;
  }
</style>
