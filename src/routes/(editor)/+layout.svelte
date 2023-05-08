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
  <a href="/export/json">
    <i>output</i>
    <span>export</span>
  </a>
  <a href="/import">
    <i>input</i>
    <span>import</span>
  </a>
</nav>
<slot />

<style>
  nav {
    margin-top: 70px;
  }
</style>
