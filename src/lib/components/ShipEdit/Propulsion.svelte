<Section label="propulsion">
  <Drive {...drive} />
  <Ftl {...ftl} />
</Section>

<script>
  import Section from "$lib/components/Section.svelte";
  import Drive from "./Propulsion/Engine.svelte";
  import Ftl from "./Propulsion/Ftl.svelte";

  export let drive = {};
  export let ftl = {};
</script>
