<App />

<svelte:head>
  {#each stylesheets as href (href)}
    <link rel="stylesheet" {href} />
  {/each}
</svelte:head>

<script>
  import '../../static/fonts/faktos.css';
  import '../../static/fonts/dosis/dosis.css';
  import '../../static/global.css';

  import App from "$lib/components/App.svelte";

</script>
