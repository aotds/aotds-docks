<Section label="carrier">
  <div>
    <ShipItem {...reqs}>
      <Field label="bays">
        <input class="short" type="number" min="1" bind:value={bays} />
      </Field>
    </ShipItem>
  </div>

  {#each squadrons as squadron, id (id)}
    <Squadron {...squadron} id={id + 1} />
  {/each}
</Section>

<script>
  import { getContext } from "svelte";

  import Field from "$lib/components/Field.svelte";
  import ShipItem from "$lib/components/ShipItem.svelte";
  import Section from "$lib/components/Section.svelte";
  import Squadron from "./Carrier/Squadron.svelte";

  export let bays = 1;
  export let reqs = { cost: 0, mass: 0 };
  export let squadrons = [];

  if (bays < 1) bays = 1;

  export let api = getContext("api");

  $: api?.dispatch.setNbrCarrierBays(bays);
</script>

<style>
  input {
    width: 5em;
  }
</style>
