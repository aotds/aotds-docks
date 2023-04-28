<Section label="weaponry">
  <Firecons {...firecons} />

  <ADFC {...adfc} />

  <AddWeapon />

  {#each weapons as weapon (weapon.id)}
    <Weapon {...weapon} />
  {/each}
</Section>

<script>
  import { getContext } from "svelte";

  import Section from "$lib/components/Section.svelte";

  import ShipItem from "$lib/components/ShipItem.svelte";
  import Field from "$lib/components/Field.svelte";

  import Firecons from "./Weaponry/Firecons.svelte";
  import ADFC from "./Weaponry/ADFC.svelte";
  import AddWeapon from "./Weaponry/AddWeapon.svelte";

  export let firecons = {};
  export let adfc = {};

  import Weapon from "./Weaponry/Weapon/index.svelte";

  export let weapons = [];
</script>
