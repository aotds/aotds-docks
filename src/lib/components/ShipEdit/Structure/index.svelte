<Section label="structure">
    <Hull {...hull}/>
    <Screens {...screens} />
    <Armor {...armor} />
    <Cargo {...cargo} />
    <Streamlining {...streamlining} />
</Section>

<script>
  import Section from "$lib/components/Section.svelte";
  import Hull from './Hull.svelte';
  import Screens from './Screens.svelte';
  import Cargo from './Cargo.svelte';
  import Armor from './Armor.svelte';
  import Streamlining from './Streamlining.svelte';

  export let hull = {};
  export let screens = {};
  export let cargo = {};
  export let streamlining = {};
  export let armor = {};


</script>

<style>
</style>
