<Section label="carrier">
  <ShipItem {...reqs}>
    <Field label="bays">
      <input class="short" type="number" min="0" bind:value={bays} />
    </Field>
  </ShipItem>

  {#each squadrons as squadron, id (id)}
    <Squadron {...squadron} id={id + 1} />
  {/each}
</Section>

<script lang="ts">
  import { getContext } from "svelte";

  import Field from "$lib/components/Field.svelte";
  import ShipItem from "$lib/components/ShipItem.svelte";
  import Section from "$lib/components/Section.svelte";
  import Squadron from "./Carrier/Squadron.svelte";

  export let bays = 0;
  export let reqs = { cost: 0, mass: 0 };
  export let squadrons = [];

  export let api = getContext("api");

  $: api?.dispatch?.setCarrierBays?.(bays);
</script>

<style>
  input {
    width: 5em;
  }
</style>
