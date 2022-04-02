<div class="layers">
  {#each armor as layer,i (i)}
    <div class="layer">
      {#each Array.from({length: layer}) as j}
        <div class="cell" />
      {/each}
    </div>
  {/each}
</div>

<script>
  import _ from "lodash";

  export let armor = [];
  console.log(armor)

</script>

<style>
  .cell {
    display: inline-block;
    margin-right: 0.5em;
    width: 1em;
    height: 1em;
    border: 1px solid black;
    border-radius: 0.5em;
  }
  .layers {
    display: flex;
    flex-direction: column-reverse;
  }
</style>
