<div>Printing this page will only prints the ship sheet.</div>

<div class="print-output">
  <Identification {...identification} />

  <div class="section-2" />

  <MainSystems {...propulsion} />
</div>

<script>
  import Identification from "./Identification.svelte";
  import MainSystems from "./MainSystems/index.svelte";
  import Hull from "./Hull.svelte";

  export let identification = {};
  export let propulsion = {};
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
