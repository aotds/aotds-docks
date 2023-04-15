<ShipEdit {...ship} />

<script>
  import { getContext } from "svelte";

  import ShipEdit from "$lib/components/ShipEdit.svelte";

  export let api = getContext("api");

  let ship = {};
  api.subscribe(() => {
    ship = api.getState();
  });
</script>
