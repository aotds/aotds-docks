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
  <slot />
</main>

<script>
  import "$lib/style/index.js";
</script>

<style>
  header nav {
    align-items: baseline;
    font-family: "Faktos";
  }
  h3 {
    font-size: var(--font-scale-12);
    font-weight: normal;
  }
</style>
