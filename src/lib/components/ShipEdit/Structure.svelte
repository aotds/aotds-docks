<Section label="structure">
  <Streamlining {...streamlining} />
  <Cargo {...cargo} />
</Section>

<script lang="ts">
  import Section from "$lib/components/Section.svelte";
  import Streamlining from "./Structure/Streamlining.svelte";
  import Cargo from "./Structure/Cargo.svelte";

  export let streamlining = {};
  export let cargo = {};
</script>
