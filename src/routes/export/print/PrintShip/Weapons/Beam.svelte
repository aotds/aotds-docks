<div>
  <Arcs selected={arcs} size="40">
    <text x="50%" y="50%">
      {weaponClass}
    </text>
  </Arcs>
</div>

<script>
  import Arcs from "$lib/components/ShipEdit/Weaponry/Weapon/Arcs.svelte";
  export let weaponClass = 1;
  export let arcs = [];
</script>

<style>
  div :global(path:hover) {
    fill: white;
  }
  div :global(path.active:hover) {
    fill: black;
  }
  text {
    text-anchor: middle;
    dominant-baseline: central;
    font-size: var(--font-scale-10);
  }
</style>
