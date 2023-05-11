<span>heavy missile</span>

<div class="arcs">
  <Arcs
    size={48}
    selected={arcs}
    on:clickArc={({ detail }) => setFirstArc(detail)}
  />
</div>

<label class="switch"> 
    <input type="checkbox" bind:checked={extended}/>
    <span>extended range</span>
</label>

<label class="switch"> 
    <input type="checkbox" bind:checked={multiStage}/>
    <span>multi-stage</span>
</label>

<script lang="ts">
  import u from "@yanick/updeep-remeda";
  import { createEventDispatcher } from "svelte";
  import memoize from "memoize-one";

  import Arcs from "../Arcs.svelte";
  import {
    weaponTypes,
    arcs as allArcs,
  } from "$lib/store/ship/weaponry/rules.ts";

  export let arcs = ["F", "FS", "FP"];

  export let extended = false;
  export let multiStage = false;


  const nbrArcs = 3;

  let firstArc = allArcs[0];
  const setFirstArc = (a) => (firstArc = a);

  $: arcs = setArcs(firstArc, nbrArcs);

  function setArcs(firstArc, nbrArcs) {
    let first_index = allArcs.findIndex((arc) => arc === firstArc);
    if (first_index === -1) first_index = 0;

    return Array.from({ length: nbrArcs }).map(
      (_dummy, i) => allArcs[(first_index + i) % allArcs.length]
    );
  }

  const dispatch = createEventDispatcher();

  const memoChange = memoize((extended,multiStage, ...arcs) =>
    dispatch("change", {
      extended,multiStage,
      arcs,
    })
  );

  $: memoChange(extended,multiStage, ...arcs);
</script>

<style>
  .arcs {
    margin-top: 0.5rem;
  }
  label span {
      padding-left: 1em; }
</style>
