<Hst.Story title="ShipEdit/Propulsion/Engine">
  <Engine {api} />
</Hst.Story>

<script>
  export let Hst;
  import { logEvent } from "histoire/client";

  const api = {
    dispatch: {
      setEngine: (engine) => logEvent("setEngine", { engine }),
    },
  };

  import Engine from "./Engine.svelte";
  import "$lib/components/GlobalStyle.svelte";
</script>
