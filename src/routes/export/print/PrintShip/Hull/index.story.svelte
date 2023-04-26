<Hst.Story title="Export/PrintShip/Hull">
  <Hst.Variant>
    <Hull {rating} {advanced} {shipMass} />
  </Hst.Variant>

  <svelte:fragment slot="controls">
    <Hst.Number bind:value={rating} title="rating" />
    <Hst.Checkbox bind:value={advanced} title="advanced" />
    <Hst.Number bind:value={shipMass} title="ship mass" />
  </svelte:fragment>
</Hst.Story>

<script>
  import Hull from "./index.svelte";

  export let Hst;

  let rating = 12;
  let advanced = true;
  let shipMass = 10;
</script>
