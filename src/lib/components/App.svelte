<svelte:head>
  <meta name="viewport" content="width=960" />
</svelte:head>

<main>
  <Ribbon />
  <Header on:changeTab={({ detail }) => (activeTab = detail)} />

  <div class:hide={activeTab !== "editor"}>
    <ShipEdit />
  </div>
  <div class:hide={activeTab !== "json"}>
    <JsonOutput />
  </div>

  {#if activeTab === "print"}
    <PrintOutput ship={$state} />
  {/if}
</main>

<script>
  import { getContext } from "svelte";
  import { Modal, Card, Nav } from "svelte-chota";

  import Ribbon from "./Ribbon.svelte";
  import Header from "./Header.svelte";
  import ShipEdit from "./ShipEdit/index.svelte";
  import About from "./About.svelte";
  import JsonOutput from "./Output/Json.svelte";
  import PrintOutput from "./Output/Print/index.svelte";

  let activeTab = "editor";

  const { state } = getContext("ship");
</script>

<style>
  .nav {
    width: var(--main-width);
    margin-left: auto;
    margin-right: auto;
  }
  .hide {
    display: none;
  }
  main {
    width: var(--main-width);
    margin-right: auto;
    margin-left: auto;
  }
</style>
