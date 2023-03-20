<Hst.Story>
  <ShipItem {mass} {cost}>Thingy</ShipItem>
  <svelte:fragment slot="controls">
    <Hst.Number bind:value={mass} title="Mass" />
    <Hst.Number bind:value={cost} title="Cost" />
  </svelte:fragment>
</Hst.Story>

<script>
  export let Hst;
  import ShipItem from "./ShipItem.svelte";
  let mass = 1;
  let cost = 3;
</script>
