<header>
  <nav>
    <h1>
      <a>The Docks</a>
    </h1>
    <h3 class="max">a Full Thrust ship builder</h3>
    <a>About</a>
    <span>&nbsp;</span>
  </nav>
</header>
<main class="responsive">
  <nav class="m l left">
    <a>
      <i>Question_Mark</i>
      <span>About</span>
    </a>
    <!-- TODO
    <a>
      <i>Quiz</i>
      <span>See also</span>
    </a>
    <a>
      <i>Format_List_Bulleted</i>
      <span>Changelog</span>
    </a>
    -->
  </nav>
  <h2>Welcome to the docks!</h2>

  <!-- TODO
  <p class="version">
    <span>version {import.meta.env.PACKAGE_VERSION}</span>
    <a>changelog</a>
  </p>
  -->

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
    The app is mostly developed for Firefox. I also check as much as I can that
    I don't mess things too badly on Chrome. For the other browsers... caveat
    emptor.
  </p>

  <p>
    Written by
    <!-- TODO change link -->
    <a href="https://techblog.babyl.ca">Yanick Champoux</a>
    . Code available on
    <!-- TODO read the url from package.json -->
    <a href="https://github.com/aotds/aotds-shipyard">Github</a>.
  </p>
</main>

<script>
  import "$lib/style/index.js";
</script>

<style>
  header nav {
    align-items: baseline;
    font-family: "Faktos";
  }
  main nav {
    margin-top: 70px;
  }
  h3 {
    font-size: var(--font-scale-12);
    font-weight: normal;
  }
  h2 {
    margin-bottom: 1.5rem;
  }
  p {
    font-size: var(--font-scale-11);
    margin-bottom: 1.5rem;
    margin-left: 1rem;
  }
</style>
