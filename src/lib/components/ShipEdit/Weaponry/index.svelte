<Section label="weaponry">
    <Firecons {...firecons} />

    <ADFC {...adfc} />

    <AddWeapon />
</Section>

<script>
import { getContext } from 'svelte';

  import Section from "$lib/components/Section/index.svelte";
import ShipItem from '$lib/components/ShipItem/index.svelte';
import Field from '$lib/components/Field/index.svelte';

  import Firecons from './Firecons.svelte';
  import ADFC from './ADFC.svelte';
    import AddWeapon from './AddWeapon.svelte';

  export let firecons = {};
  export let adfc = {};

export let weapons = [];

</script>

<style>
</style>
