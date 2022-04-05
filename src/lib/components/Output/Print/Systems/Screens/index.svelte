<div>
  {#each range(1,standard) as i}
    <img src="{base}/icons/screen.svg" alt="screen" />
  {/each}
  {#each range(1,advanced) as i}
    <img src="{base}/icons/screen-advanced.svg" alt="advanced screen" />
  {/each}
</div>

<script>
    import { base } from '$app/paths';
  import {range} from "$lib/utils.js";

  export let standard = 0;
  export let advanced = 0;
</script>

<style>
  img {
    width: 1em;
  }
  div {
    display: flex;
    gap: 0.5em;
  }
</style>
