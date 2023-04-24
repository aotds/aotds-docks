<Serialized data={serializedShip} format={data.format} />

<script>
  import { getContext } from "svelte";

  import Serialized from "./Serialized.svelte";

  const api = getContext("api");

  let shipData = api.svelteStore;
  export let data;

  const serialize = async (data, format) => {
    if (format === "json") return JSON.stringify(data, null, 2);

    return import("yaml").then(({ stringify }) => stringify(data));
  };

  let serializedShip;
  $: serialize($shipData, data.format).then((s) => (serializedShip = s));
</script>
