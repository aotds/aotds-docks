<App />

<script>
  import { setContext } from "svelte";

  import '$lib/style/index.js';
  import shipStore from "$lib/store/ship.js";

  import App from "$lib/components/App.svelte";

  setContext("ship", shipStore());
</script>
