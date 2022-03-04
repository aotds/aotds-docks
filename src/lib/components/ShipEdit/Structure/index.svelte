<Section label="structure">
    <Hull {...hull}/>
    <Screens {...screens} />
    <Cargo {...cargo} />
</Section>

<script>
  import Section from "$lib/components/Section/index.svelte";
  import Hull from './Hull.svelte';
  import Screens from './Screens.svelte';
  import Cargo from './Cargo.svelte';

  export let hull = {};
  export let screens = {};
  export let cargo = {};


</script>

<style>
</style>
