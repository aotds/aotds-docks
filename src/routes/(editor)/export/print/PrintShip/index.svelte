<div class="disclaimer">
  Printing this page will only prints the ship sheet.
</div>

<div class="print-output">
  <Identification {...identification} />

  <div class="weapon-group">
    {#each smrs as smr (smr.id)}
      <SalvoMissileRack {...smr.specs} />
    {/each}
  </div>

  <div class="weapon-group">
    <HeavyMissiles {heavyMissiles} />
  </div>

  <div class="weapon-group">
    {#each Object.keys(smls) as magId (magId)}
      <SML
        launchers={smls[magId].map(R.prop("specs"))}
        magazine={magazines.find(({ id }) => id == magId)}
      />
    {/each}
  </div>

  <Beams {beams} />

  <Weapons {weapons} />

  <div class="grid">
    <div class="s6">
      <Armor layers={structure?.armor?.layers} />
      <Hull
        shipMass={identification.reqs?.mass}
        advanced={false}
        rating={structure.hull?.rating}
      />
    </div>

    <div class="s6">
      <div>
        {#each pds as p (p.id)}
          <PDS {...pds} />
        {/each}
      </div>

      <Firecons {...firecons} />
      <Screens {...screens} />
    </div>
  </div>

  <MainSystems {...propulsion} />

  <Cargo {...cargo} />
</div>

<script>
  import u from "@yanick/updeep-remeda";

  import Identification from "./Identification.svelte";
  import MainSystems from "./MainSystems/index.svelte";
  import Hull from "./Hull/index.svelte";
  import Armor from "./Armor/index.svelte";
  import Screens from "./Screens/index.svelte";
  import Firecons from "./Firecons/index.svelte";
  import Weapons from "./Weapons/index.svelte";
  import Cargo from "./Cargo.svelte";
  import PDS from "./Weapons/PDS.svelte";
  import Beams from "./Weapons/Beams.svelte";
  import HeavyMissiles from "./Weapons/HeavyMissiles.svelte";
  import SalvoMissileRack from "./Weapons/SMR/index.svelte";
  import SML from "./Weapons/SML/index.svelte";
  import * as R from "remeda";

  export let identification = {};
  export let propulsion = {};
  export let structure = {};
  export let weaponry = {};

  $: cargo = structure.cargo ?? {};

  $: screens = structure?.screens ?? {};
  $: firecons = weaponry?.firecons ?? {};
  $: weapons = weaponry?.weapons ?? [];
  $: weapons = u.reject(
    weapons,
    u.matches({
      specs: {
        type: (t) => ["sml", "smr", "pds", "beam", "heavyMissile"].includes(t),
      },
    })
  );

  $: magazines = weaponry.missileMagazines;
  $: console.log({ magazines });

  $: pds = (weaponry?.weapons ?? []).filter(
    u.matches({ specs: { type: "pds" } })
  );
  $: beams = (weaponry?.weapons ?? []).filter(
    u.matches({ specs: { type: "beam" } })
  );
  $: heavyMissiles = (weaponry?.weapons ?? []).filter(
    u.matches({ specs: { type: "heavyMissile" } })
  );
  $: smrs = (weaponry?.weapons ?? []).filter(
    u.matches({ specs: { type: "smr" } })
  );
  $: console.log(
    (weaponry?.weapons ?? []).filter(u.matches({ specs: { type: "sml" } }))
  );
  $: smls = R.groupBy(
    (weaponry?.weapons ?? []).filter(u.matches({ specs: { type: "sml" } })),
    ({ specs: { missileMagazineId } }) => missileMagazineId
  );
  $: console.log({ smls });
</script>

<style>
  .print-output {
    width: 5.5in;
    height: 8.5in;
    border: 1px solid black;
    padding: 1em;
    margin: 0px auto;
  }
  @media print {
    :global(body > *) {
      visibility: hidden;
    }

    .print-output {
      visibility: visible;
      width: inherit;
      height: inherit;
    }
  }
  .s6 {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .s6 :global(> div) {
    margin-bottom: 1em;
  }
  .disclaimer {
    text-align: center;
    margin-bottom: 1rem;
  }
  .weapon-group {
    display: flex;
    justify-content: center;
    margin-bottom: 1em;
  }
</style>
