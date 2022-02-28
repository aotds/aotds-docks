<ShipItem {cost} {mass}>
  <Field label="ADFC">
    <input type="number" class="short" bind:value={rating} />
  </Field>
</ShipItem>


<script>
  import ShipItem from "../../ShipItem/index.svelte";
  import Field from "../../Field/index.svelte";

  import { getContext } from "svelte";

  export let rating = 0;
  export let cost = 0;
  export let mass = 0;
  export let ship = getContext("ship");

  $: ship?.dispatch_action('set_adfc',rating);
</script>
