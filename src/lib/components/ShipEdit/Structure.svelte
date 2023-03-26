<Section label="structure">
  <Hull {...hull} />
  <Cargo {...cargo} />
  <Streamlining {...streamlining} />
</Section>

<script lang="ts">
  import Section from "$lib/components/Section.svelte";
  import Streamlining from "./Structure/Streamlining.svelte";
  import Cargo from "./Structure/Cargo.svelte";
  import Hull from "./Structure/Hull.svelte";

  export let streamlining = {};
  export let cargo = {};
  export let hull = {};
</script>
