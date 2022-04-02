<Card>
  <h2 slot="header">Welcome to the docks</h2>

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
    The app is mostly developed for Firefox. I also check as much as I can that
    I don't mess things too badly on Chrome. For the other browsers... caveat
    emptor.
  </p>

  <p>
    Written by
    <a href="https://twitter.com/yenzie">Yanick Champoux</a>
    . Code available on
    <a href="https://github.com/aotds/aotds-shipyard">Github</a>
  </p>
        <div slot="footer" />
</Card>

<script>
import {
    Modal, Card
} from 'svelte-chota';

</script>

<style>
h2 {
    margin-bottom: 1em;
    font-size: var(--font-scale-14);
    font-family: Faktos;
}
  aside {
    background-color: rgb(254, 218, 184);
    position: absolute;
    height: 20em;
    max-width: 50%;
    z-index: 200;

    padding: 1em;
    border: 3px solid var(--indigo-dye);
    border-radius: 1em;
    left: 0px;
    border-left: 0px;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    top: 6em;
    font-size: var(--font-scale-11);
  }

  h3 {
    text-align: center;
    margin: 0px;
  }
p {
    margin-left: 2em;
}
</style>
