<div class="notice">
  <label>
    <input type="checkbox" bind:checked={movable} /> enable wiggletron (<i
      >alpha feature</i
    >)
  </label>
</div>

<div class="print-output">
  <Identification
    shipClass={ship.identification.shipClass}
    shipType={ship.identification.shipType}
    cost={ship.reqs?.cost}
    mass={ship.reqs?.mass}
  />

  <div class="section-2">
    <Hull structure={ship.structure} shipMass={ship.identification.mass} />

    <Systems
      firecons={ship.weaponry.firecons.nbr}
      screens={ship.structure.screens}
    />
  </div>

  <Weapons weapons={ship.weaponry.weapons} />

  <MainSystems
    {movable}
    ftl={ship?.propulsion?.ftl}
    engine={ship?.propulsion?.drive?.rating}
  />
</div>

<div class="notice">Printing this page will only prints the ship sheet.</div>

<script>
  import Identification from "./Identification/index.svelte";
  import MainSystems from "./MainSystems/index.svelte";
  import Hull from "./Hull/index.svelte";
  import Weapons from "./Weapons/index.svelte";
  import Systems from "./Systems/index.svelte";

  export let ship = {};
  let movable = false;
</script>

<style>
  .print-output {
    width: 4.25in;
    height: 5.5in;
    border: 1px solid black;
    padding: 1em;
    margin: 0px auto;
  }

  .section-2 {
    display: flex;
    align-items: start;
    margin-right: 2em;
    margin-left: 2em;
  }
  .notice {
    font-style: italic;
    margin-top: 1em;
    text-align: right;
  }

  @media print {
    :global(body > *) {
      visibility: hidden;
    }

    .print-output {
      visibility: visible;
    }
  }
</style>
