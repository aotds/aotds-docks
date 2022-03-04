<Section label="structure">
    <Hull {...hull}/>
</Section>

<script>
  import Section from "$lib/components/Section/index.svelte";
  import Hull from './Hull.svelte';

  export let hull = {};

  $: console.log(hull);

</script>

<style>
</style>
