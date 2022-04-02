<ShipItem {...reqs}>
  <Field label="FTL drive">
    {#each types as t (t)}
      <label
        ><input type="radio" bind:group={type} value={t} />
        {t}
      </label>
    {/each}
  </Field>
</ShipItem>

<script>
  import { getContext } from "svelte";
  import Field from "$lib/components/Field/index.svelte";
  import ShipItem from "$lib/components/ShipItem/index.svelte";

  const types = ["none", "standard", "advanced"];

  export let reqs = {};
  export let type = types[0];

  const ship = getContext("ship");

  $: ship.dispatch.setFtl(type);
</script>

<style>
  label {
    display: inline;
    margin-right: 1em;
  }
</style>
