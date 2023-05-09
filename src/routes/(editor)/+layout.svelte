<nav class="m l left">
  <!-- set them as active -->
  <a href="/editor">
    <i>edit</i>
    <span>editor</span>
  </a>
  <a href="/export/print">
    <i>print</i>
    <span>print</span>
  </a>
  <a href="/export">
    <i>output</i>
    <span>export</span>
  </a>
  <a href="/import">
    <i>input</i>
    <span>import</span>
  </a>
  <a on:click={handleReset}>
    <i>restart_alt</i>
    <span>reset</span>
  </a>
</nav>
<slot />

<script>
  import { getContext } from "svelte";
  import shipDux from "$lib/store/ship";

  export let api = getContext("api");

  async function handleReset() {
    if (!(await window.confirm("really reset the ship?"))) return;
    api?.dispatch?.importShip(shipDux.initialState);
  }
</script>

<style>
  nav {
    margin-top: 70px;
  }
</style>
