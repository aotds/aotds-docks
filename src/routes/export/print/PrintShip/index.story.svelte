<Hst.Story title="Export/PrintShip">
  <PrintShip {...ship} />
</Hst.Story>

<script>
  import PrintShip from "./index.svelte";
  import sampleShip from "./sample-ship.ts";

  export let Hst;

  const ship = sampleShip;
</script>
