<Serialized data={$shipData} />

<script>
  import { getContext } from "svelte";

  import Serialized from "./Serialized.svelte";

  const api = getContext("api");

  let shipData = api.svelteStore;
</script>
