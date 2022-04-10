<div
  style:transform={uiTransform}
  use:movable={{
    disabled: !isMovable,
    ship,
    system: "firecons",
  }}
>
  {#each range(1, stations) as firecon}
    <img class="firecon" src="{base}/icons/firecon.svg" alt="firecon" />
  {/each}
</div>

<script>
  import { base } from "$app/paths";
  import { range } from "$lib/utils.js";
  import { getContext } from "svelte";
  import { movable } from "../../movable.js";

  export let stations = 0;
  export let isMovable = false;
  export let uiTransform = "";

  const ship = getContext("ship");
</script>

<style>
  div {
    display: flex;
    gap: 0.5em;
  }
  img.firecon {
    width: 1em;
  }
</style>
