<Section label="structure">
    <Hull {...hull}/>
    <Screens {...screens} />
</Section>

<script>
  import Section from "$lib/components/Section/index.svelte";
  import Hull from './Hull.svelte';
  import Screens from './Screens.svelte';

  export let hull = {};
  export let screens = {};


</script>

<style>
</style>
