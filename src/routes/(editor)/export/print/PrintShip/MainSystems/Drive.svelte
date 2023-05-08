{#if rating}
  <div class="thrust">
    {rating}
  </div>
{/if}

<script>
  export let rating = 0;
</script>

<style>
  div.thrust {
    background-image: url(/icons/standard-drive.svg);
    width: 2em;
    background-size: 2em;
    background-repeat: no-repeat;
    height: 2em;
    line-height: 2em;
    text-align: center;
  }
</style>
