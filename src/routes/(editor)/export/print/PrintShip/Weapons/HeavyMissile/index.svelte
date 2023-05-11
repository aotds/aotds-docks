<div class="heavyMissile">
  <Arcs selected={arcs} size={40}>
    <image href="/icons/heavy-missile.svg" width="10" x="16" y="7" />
  </Arcs>
  <div>
    {#if extended}
      <div>extended range</div>
    {/if}
    {#if multiStage}
      <div>multi-stage</div>
    {/if}
  </div>
</div>

<script>
  import Arcs from "$lib/components/ShipEdit/Weaponry/Weapon/Arcs.svelte";
  export let arcs = [];
  export let extended = false;
  export let multiStage = false;
</script>

<style>
  .torpedo {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .weaponClass {
    text-align: center;
    background-color: black;
    color: white;
    border-radius: 50%;
    width: 20px;
  }
  div {
    margin: 0px 0.5rem;
  }
  div :global(path.arc) {
    fill: none;
  }
  div :global(path.active) {
    fill: black;
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
