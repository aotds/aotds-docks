<svg width="{size}px" height="{size}px">
  {#each arcs as arc (arc)}
    <Arc
      {arc}
      radius={size / 2}
      active={selected.includes(arc)}
      on:click={() => clickArc(arc)}
    />
  {/each}
  <circle cx="50%" cy="50%" r={inner} />
  <slot />
</svg>

<script>
  import { createEventDispatcher } from "svelte";

  import { arcs } from "$lib/store/ship/weaponry/rules";
  import Arc from "./Arc.svelte";

  export let selected = [];
  export let size = 60;
  export let inner = size / 3;

  const dispatch = createEventDispatcher();

  const clickArc = (arc) => dispatch("clickArc", arc);
</script>

<style>
  circle {
    fill: white;
  }
</style>
