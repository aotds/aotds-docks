<div>Printing this page will only prints the ship sheet.</div>

<div class="print-output">
  <Identification {...identification} />

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
      <Screens {...screens} />
      <Firecons {...firecons} />
    </div>
  </div>

  <MainSystems {...propulsion} />

  <Cargo {...cargo} />
</div>

<script>
  import Identification from "./Identification.svelte";
  import MainSystems from "./MainSystems/index.svelte";
  import Hull from "./Hull/index.svelte";
  import Armor from "./Armor/index.svelte";
  import Screens from "./Screens/index.svelte";
  import Firecons from "./Firecons/index.svelte";
  import Weapons from "./Weapons/index.svelte";
  import Cargo from "./Cargo.svelte";

  export let identification = {};
  export let propulsion = {};
  export let structure = {};
  export let weaponry = {};

  $: cargo = structure.cargo ?? {};

  $: screens = structure?.screens ?? {};
  $: firecons = weaponry?.firecons ?? {};
  $: weapons = weaponry?.weapons ?? [];
</script>

<style>
  .print-output {
    width: 4.25in;
    height: 5.5in;
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
</style>
