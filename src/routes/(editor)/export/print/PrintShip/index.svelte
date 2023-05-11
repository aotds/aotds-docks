<div class="disclaimer">
  Printing this page will only prints the ship sheet.
</div>

<div class="print-output">
  <Identification {...identification} />

  <HeavyMissiles {heavyMissiles} />

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
      specs: { type: (t) => ["pds", "beam", "heavyMissiles"].includes(t) },
    })
  );

  $: pds = (weaponry?.weapons ?? []).filter(
    u.matches({ specs: { type: "pds" } })
  );
  $: beams = (weaponry?.weapons ?? []).filter(
    u.matches({ specs: { type: "beam" } })
  );
  $: heavyMissiles = (weaponry?.weapons ?? []).filter(
    u.matches({ specs: { type: "heavyMissiles" } })
  );
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
</style>
