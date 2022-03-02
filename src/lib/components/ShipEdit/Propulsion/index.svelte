<Section label="propulsion">
    <Drive { ...propulsion.drive  } />
</Section>

<script>
  import Section from "$lib/components/Section/index.svelte";
  import Drive from './Drive/index.svelte';

  export let propulsion = {};
  $: console.log(propulsion)
</script>
