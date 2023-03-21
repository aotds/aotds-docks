<Section label="propulsion">
  <Drive {...propulsion.drive} />
  <Ftl {...propulsion.ftl} />
</Section>

<script lang="ts">
  import Section from "$lib/components/Section.svelte";
  import Drive from "./Propulsion/Engine.svelte";
  import Ftl from "./Propulsion/Ftl.svelte";

  export let propulsion = {
    drive: {},
    ftl: {},
  };
</script>
