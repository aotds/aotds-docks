<div class="main_systems">
  {#if ftl !== "none"}
    <img
      bind:this={targetFTL}
      class="ftl"
      src="{base}/icons/ftl-drive.svg"
      alt="ftl drive"
    />

    {#if movable}
      <Movable target={targetFTL} />
    {/if}
  {/if}

  {#if engine > 0}
    <div
      bind:this={targetEngine}
      class="thrust"
      style="background-image: url({base}/icons/standard-drive.svg);"
    >
      {engine}
    </div>
    {#if movable}
      <Movable target={targetEngine} />
    {/if}
  {/if}

  <img
    class="internal"
    src="{base}/icons/internal-systems.svg"
    alt="internal systems"
    bind:this={targetInternal}
  />
  {#if movable}
    <Movable target={targetInternal} />
  {/if}
</div>

<script>
  import { base } from "$app/paths";

  import Movable from "./Movable.svelte";

  export let ftl = "none";
  export let engine = 0;
  export let movable = false;

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
