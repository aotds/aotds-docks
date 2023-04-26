<div>Printing this page will only prints the ship sheet.</div>

<div class="print-output">
  <Identification {...identification} />

  <Hull
    shipMass={identification.reqs.mass}
    advanced={false}
    rating={structure.hull?.rating}
  />

  <MainSystems {...propulsion} />
</div>

<script>
  import Identification from "./Identification.svelte";
  import MainSystems from "./MainSystems/index.svelte";
  import Hull from "./Hull/index.svelte";

  export let identification = {};
  export let propulsion = {};
  export let structure = {};
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
</style>
