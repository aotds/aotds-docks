<label>submunition pack</label>

<Arcs selected={[arc]} on:clickArc={({ detail }) => clickArc(detail)} />

<script>
  import Arcs from "./Arcs.svelte";
  import { createEventDispatcher } from "svelte";

  export let arc = "F";

  const dispatch = createEventDispatcher();

  const clickArc = (arc) => {
    dispatch("change", { arc });
  };
</script>
