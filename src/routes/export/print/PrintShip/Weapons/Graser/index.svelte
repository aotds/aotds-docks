<div>
  <Arcs selected={arcs} size={40}>
    <polygon
      points="0,30 30,30 15,4"
      style="fill:black"
      transform="translate(7,2) scale(0.85)"
    />
    <text x="50%" y="50%" style="color: white">
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
  div {
    margin: 0px 0.5rem;
  }
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
