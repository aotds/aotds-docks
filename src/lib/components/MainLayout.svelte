<header>
  <nav>
    <h1>
      <a>The Docks</a>
    </h1>
    <h3 class="max">a Full Thrust ship builder</h3>
    <div class="tabs in left-align">
      <a class="spaced" class:active={currentPath === "/"} href="/">Editor</a>
      <a
        class="spaced"
        class:active={currentPath.startsWith("/about")}
        href="/about">About</a
      >
    </div>
    <span>&nbsp;</span>
  </nav>
</header>
<main class="responsive">
  <slot />
</main>

<script>
  import { page } from "$app/stores";
  import "$lib/style/index.js";

  $: currentPath = $page.url.pathname;
  $: console.log({ currentPath });
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
  a.spaced {
    min-width: 5em;
  }
  span {
    width: 5em;
  }
  .tabs {
    border-bottom: 0px;
  }
</style>
