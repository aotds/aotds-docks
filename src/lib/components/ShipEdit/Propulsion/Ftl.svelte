<ShipItem {...reqs}>
  <Field label="FTL drive">
    {#each ftlTypes as t (t)}
      <label
        ><input type="radio" bind:group={type} value={t} />
        {t}
      </label>
    {/each}
  </Field>
</ShipItem>

<script lang="ts">
  import { getContext } from "svelte";

  import ShipItem from "$lib/components/ShipItem.svelte";
  import Field from "$lib/components/Field.svelte";

  import { ftlTypes } from "$lib/store/ship/propulsion/ftl";

  export let type = "none";
  export let reqs = { mass: 0, cost: 0 };
  export let api = getContext("api");

  $: api?.dispatch.setFtlType?.(type);
</script>

<style>
  label {
    display: inline;
    margin-right: 1em;
  }
</style>
