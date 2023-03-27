<Section label="weaponry">
  <Firecons {...firecons} />

  <ADFC {...adfc} />
  <!--

    <AddWeapon />

    {#each weapons as weapon (weapon.id)}
        <Weapon {weapon} id={weapon.id} />
    {/each}
    -->
</Section>

<script>
  import { getContext } from "svelte";

  import Section from "$lib/components/Section.svelte";

  import ShipItem from "$lib/components/ShipItem.svelte";
  import Field from "$lib/components/Field.svelte";

  import Firecons from "./Weaponry/Firecons.svelte";
  import ADFC from "./Weaponry/ADFC.svelte";

  export let firecons = {};
  export let adfc = {};
  /*

    import AddWeapon from './AddWeapon.svelte';
    import Weapon from './Weapon/index.svelte';


export let weapons = [];
*/
</script>

<style>
</style>
