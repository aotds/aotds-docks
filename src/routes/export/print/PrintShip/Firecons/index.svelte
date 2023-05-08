<div>
  {#each Array.from({ length: stations }) as firecon}
    <img class="firecon" src="/icons/firecon.svg" alt="firecon" />
  {/each}
</div>

<script>
  export let stations = 0;
</script>

<style>
  div {
    display: flex;
    gap: 0.5em;
  }
  img.firecon {
    width: 1.4rem;
    margin: 0px 0.5rem;
  }
</style>
