<Hst.Story title="Export/PrintShip/Screens">
  <Hst.Variant>
    <Screens {standard} {advanced} />
  </Hst.Variant>

  <svelte:fragment slot="controls">
    <Hst.Number bind:value={standard} title="standard" />
    <Hst.Number bind:value={advanced} title="advanced" />
  </svelte:fragment>
</Hst.Story>

<script>
  import Screens from "./index.svelte";

  export let Hst;

  let standard = 2;
  let advanced = 1;
</script>
