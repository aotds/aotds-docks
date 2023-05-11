<div>
  {#each heavyMissiles as w}
    <HeavyMissile {...w.specs} />
  {/each}
</div>

<script>
  import HeavyMissile from "./HeavyMissile/index.svelte";

  export let heavyMissiles = [];
</script>

<style>
  .beam-row {
    display: flex;
    justify-content: center;
  }
</style>
