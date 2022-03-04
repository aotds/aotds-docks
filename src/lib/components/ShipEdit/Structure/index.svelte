<Section label="structure">
    <Hull {...hull}/>
    <Screens {...screens} />
    <Cargo {...cargo} />
    <Streamlining {...streamlining} />
</Section>

<script>
  import Section from "$lib/components/Section/index.svelte";
  import Hull from './Hull.svelte';
  import Screens from './Screens.svelte';
  import Cargo from './Cargo.svelte';
  import Streamlining from './Streamlining.svelte';

  export let hull = {};
  export let screens = {};
  export let cargo = {};
  export let streamlining = {};


</script>

<style>
</style>
