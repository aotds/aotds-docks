<div class="sml">
  <div class="launchers">
    {#each launchers as launcher, i (i)}
      <div>
        <SMR {...launcher} />
        <div class="line">&nbsp;</div>
      </div>
    {/each}
  </div>
  <div class="magazine">
    {#each Array.from({ length: magazine.maxAmmo }).fill(1) as a, i (i)}
      <img src="/icons/missile.svg" width="18" />
    {/each}
  </div>
  <div>
    {#if magazine.extended}
      <div>extended range</div>
    {/if}
  </div>
</div>

<script>
  import SMR from "../SMR/index.svelte";

  export let launchers = [];

  /** the missile magazine feeding the launchers */
  export let magazine = {};
</script>

<style>
  .sml {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .launchers {
    display: flex;
  }
  .launchers > div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .line {
    width: 0.2em;
    background-color: black;
    top: -0.5em;
  }
  .magazine {
    border: 0.2em black solid;
    border-radius: 0.5em;
    padding: 0.3em;
    text-align: center;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
  }
</style>
