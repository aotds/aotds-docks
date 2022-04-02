<div>
  {#each range(1,firecons) as firecon}
    <img class="firecon" src="icons/firecon.svg" alt="firecon" />
  {/each}
</div>

<script>
  import {range} from "$lib/utils.js";

  export let firecons = 0;
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
