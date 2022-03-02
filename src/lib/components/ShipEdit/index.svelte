<Identification {...$shipState.identification} {...$shipState.reqs} />

<script>
  import { getContext } from "svelte";

  import Identification from "./Identification/index.svelte";

  const { state: shipState } = getContext("ship");
</script>

<style>
</style>
