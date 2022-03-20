<header>
  <h1>The Docks</h1>
  <h2>
    a <a href="https://shop.groundzerogames.co.uk/rules.html">Full Thrust</a> ship
    builder
  </h2>
    <a  on:click|preventDefault={() => showAbout = true}>about the app</a>
</header>

    <Modal bind:open={showAbout}>
    <About/>
    </Modal>

    <script>
import {
    Modal, Card, Nav
} from 'svelte-chota';

import About from './About.svelte';
  let showAbout = false;
</script>

<style>
  header {
    display: flex;
    align-items: baseline;
    width: var(--main-width);
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 3em;
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
</style>
