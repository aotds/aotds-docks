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
  import Field from "$lib/components/Field.svelte";
  import ShipItem from "$lib/components/ShipItem.svelte";

  export let reqs = { cost: 0, mass: 0 };
  export let advanced = false;
  export let rating = 0;
  export let api = getContext("api");

  $: api?.dispatch?.setDrive?.({ rating, advanced });
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
  input {
    margin-bottom: 0px !important;
  }
  input:not([type="checkbox"]) {
    border: 0px;
    border-bottom: 1px solid var(--indigo-dye);
    border-radius: 0px;
    height: calc(
      1rem * var(--line-height) + var(--form-element-spacing-vertical) * 1
    );
    padding: 0 0.5rem;
    text-align: center;
  }
</style>
