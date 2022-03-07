<label>needle weapon</label>

<Arcs selected={[arc]} on:click_arc={({ detail }) => click_arc(detail)} />

<script>
  import { getContext } from "svelte";
  import Arcs from "./Arcs.svelte";
  import { createEventDispatcher } from "svelte";

  const all_arcs = ["FS", "F", "FP", "AP", "A", "AS"];

  export let arc = "F";

  const dispatch = createEventDispatcher();

  const click_arc = (arc) => {
        dispatch("change",{arc});
  };
</script>

<style>
  .arc {
    display: flex;
    flex-direction: column;
    margin-right: 1em;
  }
</style>
