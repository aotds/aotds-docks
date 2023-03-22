<Hst.Story>
  <ShipEdit {ship} />
</Hst.Story>

<script>
  import { setContext } from "svelte";
  import ShipEdit from "./ShipEdit.svelte";
  import { createApi } from "$lib/store/api";

  export let Hst;

  const api = createApi();
  setContext("api", api);

  let ship = api.getState();

  api.subscribe(() => {
    console.log("update!");
    ship = api.getState();
  });
</script>
