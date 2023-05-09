<Hst.Story title="Export/PrintShip/Armor">
  <Hst.Variant>
    <Armor {layers} />
  </Hst.Variant>
</Hst.Story>

<script>
  import Armor from "./index.svelte";

  export let Hst;

  let layers = [1, 2, 3];
</script>
