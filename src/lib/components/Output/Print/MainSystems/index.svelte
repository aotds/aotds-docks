<div class="main_systems">
  {#if ftl !== "none"}
    <img class="ftl" src="{base}/icons/ftl-drive.svg" alt="ftl drive" />
  {/if}

  {#if engine > 0}
    <div class="thrust"
            style="background-image: url({base}/icons/standard-drive.svg);"
        >{engine}</div>
  {/if}

  <img
    class="internal"
    src="{base}/icons/internal-systems.svg"
    alt="internal systems"
  />
</div>

<script>
    import { base } from '$app/paths';

  export let ftl = "none";
  export let engine = 0;
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
