<App />

<script>
  import { setContext } from "svelte";


  import "../../static/fonts/faktos.css";
  import "../../static/fonts/dosis/dosis.css";
  import "../../static/global.css";
  import shipStore from "$lib/store/ship.js";

  import App from "$lib/components/App.svelte";

  setContext("ship", shipStore());
</script>
