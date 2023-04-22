{#if ship}
  <ShipEdit {...ship} />
{/if}

<script>
  import { getContext } from "svelte";

  import ShipEdit from "$lib/components/ShipEdit.svelte";

  export let api = getContext("api");

  let ship = api?.getState() ?? {};
  api?.subscribe(() => {
    ship = api.getState();
  });
</script>
