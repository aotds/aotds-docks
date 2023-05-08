<div>
  {#each Array.from({ length: standard }) as _, i (i)}
    <img src="/icons/screen.svg" alt="screen" />
  {/each}
  {#each Array.from({ length: advanced }) as _, i (i)}
    <img src="/icons/screen-advanced.svg" alt="advanced screen" />
  {/each}
</div>

<script>
  export let standard = 0;
  export let advanced = 0;
</script>

<style>
  img {
    width: 1.2rem;
    margin: 0px 0.5rem;
  }
  div {
    display: flex;
    gap: 0.5em;
  }
</style>
