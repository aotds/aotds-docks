<PrintShip {...$ship} />

<script>
  import { getContext } from "svelte";
  import { readable } from "svelte/store";

  import PrintShip from "./PrintShip/index.svelte";

  const api = getContext("api");

  const ship = api?.svelteStore ?? readable({});
</script>
