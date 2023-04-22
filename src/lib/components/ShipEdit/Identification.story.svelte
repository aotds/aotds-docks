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
    {api}
  />
</Hst.Story>

<script lang="ts">
  export let Hst;
  import { logEvent } from "histoire/client";
  import Identification from "./Identification.svelte";

  const api = {
    dispatch: {
      setCarrier: (isCarrier) => logEvent("isCarrier", { isCarrier }),
    },
  };
</script>
