<App />

<svelte:head>
  {#each stylesheets as href (href)}
    <link rel="stylesheet" {href} />
  {/each}
</svelte:head>

<script>
  import { base } from "$app/paths";
  import App from "../components/App.svelte";

  const stylesheets = [
    "/bulma/bulma.css",
    "/fonts/faktos.css",
    "/fonts/dosis/dosis.css",
    "/global.css",
  ].map((ss) => base + ss);

</script>
