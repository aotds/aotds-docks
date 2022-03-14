<Section label="carrier">
  <ShipItem {...reqs}>
    <Field label="bays">
      <input type="number" min="0" bind:value={bays} />
    </Field>
  </ShipItem>

  {#each squadrons as squadron,id (id)}
    <Squadron {...squadron} id={id+1} />
  {/each}
</Section>

<script>
import { getContext } from 'svelte';
    import Field from '$lib/components/Field/index.svelte';
    import ShipItem from '$lib/components/ShipItem/index.svelte';
    import Section from '$lib/components/Section/index.svelte';
    import Squadron from './Squadron.svelte';

    export let bays = 0;
    export let reqs = {};
export let squadrons = [];

const { dispatch } = getContext('ship');

$: dispatch.setCarrierBays(bays);

</script>

<style>
input {
    width: 5em;
}
</style>
