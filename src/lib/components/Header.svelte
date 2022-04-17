<header>
  <h1>The Docks</h1>
  <h2>
    a <a href="https://shop.groundzerogames.co.uk/rules.html">Full Thrust</a> ship
    builder
  </h2>
  <a on:click|preventDefault={() => (showAbout = true)}>about the app</a>
</header>

<div class="menu">
  <Tabs bind:active={activeTab}>
    <Tab tabid="editor">editor</Tab>
    <Tab tabid="json">json view</Tab>
    <Tab tabid="print">print view</Tab>
  </Tabs>

  <div class="actions">
    <a on:click|preventDefault={resetShip}>reset ship</a>
  </div>
</div>

<Modal bind:open={showAbout}>
  <About />
</Modal>

<script>
  import { getContext, createEventDispatcher } from "svelte";
  import { Modal, Card, Nav, Tab, Tabs } from "svelte-chota";

  import About from "./About.svelte";
  let showAbout = false;
  let activeTab = "editor";

  const ship = getContext("ship");

  const dispatch = createEventDispatcher();
  $: dispatch("changeTab", activeTab);

  const resetShip = () => {
    if (!window.confirm("you really want to reset the ship?")) return;

    ship.dispatch.resetShip();
  };
</script>

<style>
  header {
    display: flex;
    align-items: baseline;
    width: var(--main-width);
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 1em;
  }
  h1,
  h2 {
    text-align: left;
    font-family: Faktos;
    padding: 0px;
    margin: 0px;
  }

  h1 {
    font-size: var(--font-scale-15);
  }
  h2 {
    flex: 1;
    padding-left: 1em;
    font-size: var(--font-scale-13);
  }
  header > a {
    margin: 0px 2em;
    font-size: var(--font-scale-10);
  }
  div :global(nav) {
    margin-left: 2em;
    margin-bottom: 2em;
  }
  div :global(nav span) {
    font-weight: bold;
    font-family: var(--main-font-family);
    font-size: var(--font-scale-12);
    margin-right: 1em;
    padding-bottom: 0.125em !important;
  }
  .menu {
    display: flex;
    align-items: baseline;
  }
  .menu .actions {
    flex: 1;
    text-align: right;
  }
</style>
