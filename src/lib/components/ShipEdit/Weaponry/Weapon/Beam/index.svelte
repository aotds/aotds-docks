<span>beam</span>

<Field label="beam class" suffix>
  <select bind:value={weaponClass}>
    <option value={1}>1</option>
    <option value={2}>2</option>
    <option value={3}>3</option>
    <option value={4}>4</option>
  </select>
  <i>arrow_drop_down</i>
</Field>

<Field label="arcs" suffix>
  <select bind:value={nbrArcs}>
    {#each arc_options[weaponClass] || [] as nbrArcs (nbrArcs)}
      <option>{nbrArcs}</option>
    {/each}
  </select>
  <i>arrow_drop_down</i>
</Field>

<div class="arcs">
  <Arcs
    size={48}
    selected={arcs}
    on:clickArc={({ detail }) => setArcs(detail)}
  />
</div>

<script>
  import { getContext } from "svelte";
  import * as R from "remeda";

  import Arcs from "../Arcs.svelte";
  import ShipItem from "$lib/components/ShipItem.svelte";
  import Field from "$lib/components/Field.svelte";

  import { createEventDispatcher } from "svelte";
  import memoize from "memoize-one";

  const all_arcs = ["FS", "F", "FP", "AP", "A", "AS"];

  export let weaponClass = 1;
  export let arcs = ["F"];

  let arc_options = {
    1: [6],
    2: [3, 6],
    3: [1, 2, 3, 4, 5, 6, "broadside"],
    4: [1, 2, 3, 4, 5, 6, "broadside"],
  };

  let nbrArcs = arcs.length;

  $: if (!arc_options[weaponClass].includes(nbrArcs)) {
    nbrArcs = arc_options[weaponClass][0];
    console.log({ nbrArcs, label: "in if" });
  }

  const broadside = ["FS", "FP", "AP", "AS"];

  function setArcs(firstArc) {
    console.log(firstArc);
    let newArcs;
    if (nbrArcs === "broadside") {
      newArcs = broadside;
    } else {
      let first_index = all_arcs.findIndex((arc) => arc === firstArc);
      if (first_index === -1) first_index = 0;

      newArcs = Array.from({ length: nbrArcs }).map(
        (_dummy, i) => all_arcs[(first_index + i) % all_arcs.length]
      );
    }

    $: console.log({ newArcs, arcs });
    if (
      arcs.length !== newArcs.length ||
      arcs.length !== R.intersection(arcs, newArcs).length
    ) {
      arcs = newArcs;
    }
  }

  $: if (arcs.length !== nbrArcs) setArcs(arcs[0]);

  $: console.log("it changed!", arcs);

  const dispatch = createEventDispatcher();

  let i = 5;

  const memoChange = memoize((weaponClass, ...arcs) =>
    dispatch("change", {
      weaponClass,
      arcs,
    })
  );

  $: memoChange(weaponClass, ...arcs);
</script>

<style>
  .arcs {
    margin-top: 0.5rem;
  }
</style>
