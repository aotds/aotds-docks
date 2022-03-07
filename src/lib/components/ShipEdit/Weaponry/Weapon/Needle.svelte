<label>needle weapon</label>

<Arcs selected={arcs} on:click_arc={({ detail }) => click_arc(detail)} />

<script>
  import { getContext } from "svelte";
  import Arcs from "./Arcs.svelte";
  import { createEventDispatcher } from "svelte";

  const all_arcs = ["FS", "F", "FP", "AP", "A", "AS"];

  export let arcs = ["F"];

  const click_arc = (arc) => {
      console.log(arc);
      return;
    if (arcs[0] === arc) return;
    arcs = [arc];
  };

  const dispatch = createEventDispatcher();

  $: dispatch("change", { arcs });
</script>

<style>
  .arc {
    display: flex;
    flex-direction: column;
    margin-right: 1em;
  }
</style>
