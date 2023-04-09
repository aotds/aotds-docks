<Hst.Story title="ShipEdit/Identification">
  <Identification
    shipClass="Demeter"
    shipType="Destroyer"
    isCarrier={false}
    reqs={{
      cost: 12,
      mass: 13,
      usedMass: 9,
    }}
  />
</Hst.Story>

<script lang="ts">
  export let Hst;
  import Identification from "./Identification.svelte";
</script>
