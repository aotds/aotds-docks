<div>
  {#each classes as c (c)}
    <div class="beam-row">
      {#each byClass[`${c}`] as w}
        <Beam {...w.specs} />
      {/each}
    </div>
  {/each}
</div>

<script>
  import * as R from "remeda";

  import Beam from "./Beam.svelte";

  export let beams = [];

  $: byClass = R.groupBy(beams, (b) => b.specs.weaponClass);
  $: classes = R.uniq(beams.map((b) => b.specs.weaponClass)).sort((a, b) =>
    a < b ? 1 : -1
  );
</script>

<style>
  .beam-row {
    display: flex;
    justify-content: center;
  }
</style>
