<ShipItem {cost} {mass}>
  <Field label="ADFC">
    <input type="number" class="short" bind:value={rating} />
  </Field>
</ShipItem>


<script>
  import get from "lodash/get.js";
  import ShipItem from "../../ShipItem/index.svelte";
  import Field from "../../Field/index.svelte";
  import dux from "../../../dux";

  import { getContext } from "svelte";

  export let rating = 0;
  export let cost = 0;
  export let mass = 0;
  export let ship_change = getContext("ship_change") || (() => {});

  $: ship_change(dux.actions.set_adfc(rating));
</script>
