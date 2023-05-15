<Section label="weaponry">
  <Firecons {...firecons} />

  <ADFC {...adfc} />

  <MissileMagazines magazines={missileMagazines} />

  <AddWeapon />

  {#each weapons as weapon (weapon.id)}
    <Weapon {...weapon} nbrMissileMagazines={missileMagazines.length} />
  {/each}
</Section>

<script>
  import { getContext } from "svelte";
  import u from "@yanick/updeep-remeda";

  import Section from "$lib/components/Section.svelte";

  import ShipItem from "$lib/components/ShipItem.svelte";
  import Field from "$lib/components/Field.svelte";

  import Firecons from "./Weaponry/Firecons.svelte";
  import ADFC from "./Weaponry/ADFC.svelte";
  import AddWeapon from "./Weaponry/AddWeapon.svelte";
  import MissileMagazines from "./MissileMagazines.svelte";
  import Weapon from "./Weaponry/Weapon/index.svelte";

  export let firecons = {};
  export let adfc = {};
  export let missileMagazines = [];
  export let weapons = [];

  $: missileMagazines = addLaunchersToMagazines(missileMagazines, weapons);

  function addLaunchersToMagazines(magazines, weapons) {
    return u.map(magazines, (mag) =>
      u(mag, {
        launchers: weapons.filter(
          u.matches({
            specs: {
              type: "sml",
              missileMagazineId: mag.id,
            },
          })
        ),
      })
    );
  }
</script>
