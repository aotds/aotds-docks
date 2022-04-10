<div class="weapons">
  <div class="beams">
    {#each beams as beam}
      <Beam {isMovable} {...beam} />
    {/each}
  </div>
</div>

<script>
  import Beam from "./Beam/index.svelte";
  import { getContext } from "svelte";
  import { movable } from "../movable.js";
  export let weapons = [];
  export let isMovable = false;

  let beams = [];
  $: beams = weapons.filter(({ type }) => type === "beam");

  const ship = getContext("ship");
</script>

<style>
  div {
    margin-bottom: 2em;
  }
  .beams {
    display: flex;
    justify-content: space-evenly;
  }
</style>
