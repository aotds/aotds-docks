<ShipItem {...reqs}>
  <div>
    <Field label="thrust rating">
      <input
        class="short"
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
  import Field from "$lib/components/Field/index.svelte";
  import ShipItem from "$lib/components/ShipItem/index.svelte";

  export let reqs = {};
  export let advanced = false;
  export let rating = 0;

  const ship = getContext("ship");

  $: ship.dispatch(ship.actions.setDrive({ rating, advanced }));
</script>

<style>
  div {
    display: flex;
    align-items: end;
  }
  label {
    font-family: var(--main-font-family);
    margin-left: 2em;
  }
  input[type="number"] {
    width: 5em;
  }
</style>
