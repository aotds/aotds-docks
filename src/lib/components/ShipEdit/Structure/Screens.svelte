<ShipItem {...reqs}>
  <div>
    <Field label="screens">
      <input class="short" type="number" bind:value={standard} min="0" />
    </Field>

    <Field label="advanced screens">
      <input class="short" type="number" bind:value={advanced} min="0" />
    </Field>
  </div>
</ShipItem>

<script>
  import { getContext } from "svelte";

  import Section from "$lib/components/Section.svelte";
  import Field from "$lib/components/Field.svelte";
  import ShipItem from "$lib/components/ShipItem.svelte";

  export let reqs = {};
  export let standard = 0;
  export let advanced = 0;

  const api = getContext("api");

  $: api?.dispatch?.setScreens?.({ standard, advanced });
</script>

<style>
  input {
    width: 3em;
  }
  div {
    display: flex;
    gap: 2em;
  }
</style>
