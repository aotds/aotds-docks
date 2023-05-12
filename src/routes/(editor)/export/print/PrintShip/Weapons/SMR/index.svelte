<div class="smr">
  <Arcs selected={arcs} size={40}>
    <image href="/icons/missile.svg" width="18" x="12" y="7" />
  </Arcs>
  <div>
    {#if extended}
      <div>extended range</div>
    {/if}
  </div>
</div>

<script>
  import Arcs from "$lib/components/ShipEdit/Weaponry/Weapon/Arcs.svelte";
  export let arcs = [];
  export let extended = false;
</script>

<style>
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
