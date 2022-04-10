<div
  style:transform={uiTransform}
  use:movable={{
    disabled: !isMovable,
    ship,
    system: ["weapon", id],
  }}
>
  <Arcs selected={arcs} size="40">
    <text x="50%" y="50%">
      {weaponClass}
    </text>
  </Arcs>
</div>

<script>
  import { getContext } from "svelte";
  import { movable } from "../../movable.js";
  import Arcs from "$lib/components/ShipEdit/Weaponry/Weapon/Arcs.svelte";
  export let weaponClass = 1;
  export let arcs = [];
  export let uiTransform = "";
  export let isMovable = false;
  export let id = -1;
  const ship = getContext("ship");
</script>

<style>
  div :global(path) {
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
