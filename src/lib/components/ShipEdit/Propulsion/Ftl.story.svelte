<Hst.Story title="ShipEdit/Propulsion/Ftl">
  <Ftl {api} />
</Hst.Story>

<script>
  export let Hst;
  import { logEvent } from "histoire/client";

  const api = {
    dispatch: {
      setFtl: (ftl) => logEvent("setFtl", { ftl }),
    },
  };

  import Ftl from "./Ftl.svelte";
</script>
