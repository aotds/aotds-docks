<Section label="propulsion">
    <Drive { ...propulsion.drive  } />
    <Ftl { ...propulsion.ftl } />
</Section>

<script>
  import Section from "$lib/components/Section/index.svelte";
  import Drive from './Drive/index.svelte';
  import Ftl from './Ftl.svelte';

  export let propulsion = {};
</script>
