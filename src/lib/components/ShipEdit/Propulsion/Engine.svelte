<ShipItem {...reqs}>
  <div>
    <Field label="thrust rating">
      <input
        class="engine"
        type="number"
        bind:value={rating}
        min="0"
        max="20"
        step="1"
      />
    </Field>

    <label><input type="checkbox" bind:checked={advanced} /> advanced</label>
  </div>
</ShipItem>

<script>
  import { getContext } from "svelte";
  import Field from "$lib/components/Field.svelte";
  import ShipItem from "$lib/components/ShipItem.svelte";

  export let reqs = { cost: 0, mass: 0 };
  export let advanced = false;
  export let rating = 0;
  export let api = getContext("api");

  $: api?.dispatch?.setDrive?.({ rating, advanced });
</script>

<style>
  input.engine {
    width: 9em;
  }
  div {
    display: flex;
    align-items: end;
  }
</style>
