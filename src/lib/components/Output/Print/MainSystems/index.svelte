<div class="main_systems">
  {#if ftl !== "none"}
    <img
      class="ftl"
      src="{base}/icons/ftl-drive.svg"
      alt="ftl drive"
      use:movable={{
        disabled: !isMovable,
      }}
      on:translate={({ detail: translate }) => {
        ship.dispatch.setUITransform({ system: "ftl", translate });
      }}
      style:transform={ftl?.uiTransform}
    />
  {/if}

  {#if engine > 0}
    <div
      class="thrust"
      style="background-image: url({base}/icons/standard-drive.svg);"
      use:movable={{
        disabled: !isMovable,
      }}
      on:translate={({ detail: translate }) => {
        ship.dispatch.setUITransform({ system: "drive", translate });
      }}
      style:transform={drive?.uiTransform}
    >
      {engine}
    </div>
  {/if}

  <img
    class="internal"
    src="{base}/icons/internal-systems.svg"
    alt="internal systems"
    bind:this={targetInternal}
    use:movable={{
      disabled: !isMovable,
    }}
    on:translate={({ detail: translate }) => {
      ship.dispatch.setUITransform({ system: "internalSystems", translate });
    }}
    style:transform={structure?.uiTransform}
  />
</div>

<script>
  import { getContext } from "svelte";
  import { base } from "$app/paths";

  import Movable from "./Movable.svelte";
  import { movable } from "./movable.js";

  export let ftl = "none";
  export let engine = 0;
  export let isMovable = false;
  export let structure = {};
  export let drive = {};

  let internalTranslate = "translate(50px,50px)";

  const ship = getContext("ship");

  let frame = {
    translate: [0, 0],
  };

  let targetFTL;
  let targetInternal;
  let targetEngine;
</script>

<style>
  .thrust {
    width: 2em;
    background-size: 2em;
    background-repeat: no-repeat;
    height: 2em;
    line-height: 2em;
    text-align: center;
  }
  .main_systems {
    display: flex;
    align-items: center;
    gap: 1em;
    justify-content: space-evenly;
    margin-top: 1em;
  }
  img.ftl {
    height: 2em;
  }
  img.internal {
    height: 2em;
  }
</style>
