<div class="header">
  <h2>Welcome to the docks!</h2>
  <div>version {`import.meta.env.PACKAGE_VERSION`}</div>
</div>

<p>
  The Docks is a ship builder for the game
  <a href="https://shop.groundzerogames.co.uk/rules.html" class="helper"
    >Full Thrust</a
  >, with construction rules following the
  <a href="http://members.ozemail.com.au/~laranzu/fullthrust/rules/">
    Cross Dimensions rules
  </a>
  as closely as possible.
</p>

<p>
  The app is mostly developed for Firefox. I also check as much as I can that I
  don't mess things too badly on Chrome. For the other browsers... caveat
  emptor.
</p>

<p>
  Written by
  <a href="https://techblog.babyl.ca">Yanick Champoux</a>
  . Code available on
  <a href={import.meta.env.HOMEPAGE}>my Gitea instance</a>.
</p>

<p>Found a bug? You can report it <a href={import.meta.env.BUGS}>here</a>.</p>

<style>
  h2 {
    margin-bottom: 1.5rem;
    flex: 1;
  }
  p {
    font-size: var(--font-scale-11);
    margin-bottom: 1.5rem;
    margin-left: 1rem;
  }
  .header {
    display: flex;
    align-items: baseline;
  }
  .header div {
    font-size: var(--font-scale-11);
  }
</style>
