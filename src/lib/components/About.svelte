{#if showChangelog}
  <Card>
    <h2 slot="header">Changelog for the Docks</h2>
    <div class="changelog">
      <Changelog />
    </div>
  </Card>
{:else}
  <Card>
    <div slot="header" class="header">
      <h2>Welcome to the docks</h2>

      <div class="version">
        <div>version {import.meta.env.PACKAGE_VERSION}</div>
        <a on:click={() => (showChangelog = true)}>changelog</a>
      </div>
    </div>

    <p>
      This app is a ship builder for the game
      <a href="https://shop.groundzerogames.co.uk/rules.html">Full Thrust</a>
      .
    </p>

    <p>
      The contruction rules are following the
      <a href="http://members.ozemail.com.au/~laranzu/fullthrust/rules/">
        Cross Dimensions rules
      </a>
      as closely as possible.
    </p>

    <p>
      The app is mostly developed for Firefox. I also check as much as I can
      that I don't mess things too badly on Chrome. For the other browsers...
      caveat emptor.
    </p>

    <p>
      Written by
      <a href="https://twitter.com/yenzie">Yanick Champoux</a>
      . Code available on
      <a href="https://github.com/aotds/aotds-shipyard">Github</a>.
    </p>
  </Card>
{/if}

<script>
  import { Modal, Card } from "svelte-chota";
  import Changelog from "./Changelog.svelte";

  let showChangelog = false;
</script>

<style>
  h2 {
    font-size: var(--font-scale-14);
    font-family: Faktos;
    margin-bottom: 0px;
  }
  .header {
    margin-bottom: 1em;
    display: flex;
    align-items: center;
  }

  p {
    margin-left: 2em;
  }

  .version {
    flex: 1;
    text-align: right;
  }

  .changelog :global(h1),
  :global(h1 + p) {
    display: none;
  }

  .changelog :global(h2) {
    font-size: var(--font-scale-12);
    font-family: Faktos;
  }
  .changelog :global(h3) {
    font-size: var(--font-scale-12);
    font-family: Faktos;
  }
  .version a {
    display: inline-block;
  }
</style>
