<Section label="structure">
  <Hull {...hull} />
  <Screens {...screens} />
  <Armor {...armor} />
  <Cargo {...cargo} />
  <Streamlining {...streamlining} />
</Section>

<script lang="ts">
  import Section from "$lib/components/Section.svelte";
  import Streamlining from "./Structure/Streamlining.svelte";
  import Cargo from "./Structure/Cargo.svelte";
  import Hull from "./Structure/Hull.svelte";
  import Screens from "./Structure/Screens.svelte";
  import Armor from "./Structure/Armor.svelte";

  export let streamlining = {};
  export let cargo = {};
  export let hull = {};
  export let screens = {};
  export let armor = {};
</script>
