<span>graser</span>

<Field label="graser class" suffix>
  <select bind:value={weaponClass}>
    {#each weaponClasses as value}
      <option {value}>{value}</option>
    {/each}
  </select>
  <i>arrow_drop_down</i>
</Field>

<Field label="arcs" suffix>
  <select bind:value={nbrArcs}>
    {#each nbrArcsOptions as value}
      <option {value}>{value}</option>
    {/each}
  </select>
  <i>arrow_drop_down</i>
</Field>

<div class="arcs">
  <Arcs
    size={48}
    selected={arcs}
    on:clickArc={({ detail }) => setFirstArc(detail)}
  />
</div>

<script lang="ts">
  import * as R from "remeda";
  import u from "@yanick/updeep-remeda";
  import { createEventDispatcher } from "svelte";
  import memoize from "memoize-one";

  import Arcs from "../Arcs.svelte";
  import ShipItem from "$lib/components/ShipItem.svelte";
  import Field from "$lib/components/Field.svelte";
  import {
    weaponTypes,
    broadsideArcs,
    arcs as allArcs,
    isBroadside,
  } from "$lib/store/ship/weaponry/rules.ts";

  const options = weaponTypes.find(u.matches({ type: "graser" })).options;

  const weaponClasses = options.map(R.prop("weaponClass"));

  export let weaponClass = weaponClasses[0];

  export let arcs = ["F"];

  let nbrArcs = isBroadside(arcs) ? "broadside" : arcs.length;

  $: classOptions = options.find(u.matches({ weaponClass }));

  $: nbrArcsOptions = classOptions.nbrArcs;
  $: broadside = classOptions.broadside;

  $: if (!nbrArcsOptions.includes(nbrArcs)) nbrArcs = nbrArcsOptions[0];

  function allowedArcs(arcs, options) {
    if (options.broadside && isBroadside(arcs)) return true;

    return options.nbrArcs.includes(arcs.length);
  }

  let firstArc = allArcs[0];
  const setFirstArc = (a) => (firstArc = a);

  $: arcs = setArcs(firstArc, nbrArcs);

  function setArcs(firstArc, nbrArcs) {
    if (nbrArcs === "broadside") return broadsideArcs;

    let first_index = allArcs.findIndex((arc) => arc === firstArc);
    if (first_index === -1) first_index = 0;

    return Array.from({ length: nbrArcs }).map(
      (_dummy, i) => allArcs[(first_index + i) % allArcs.length]
    );
  }

  const dispatch = createEventDispatcher();

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
