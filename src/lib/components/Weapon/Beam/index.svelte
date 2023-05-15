<label>beam</label>

<Field label="beam class">
  <select bind:value={weapon_class}>
    <option>1</option>
    <option>2</option>
    <option>3</option>
    <option>4</option>
  </select>
</Field>

<Field label="arcs">
  <select bind:value={nbr_arcs}>
    {#each arc_options[weapon_class] || [] as nbr_arcs (nbr_arcs)}
      <option>{nbr_arcs}</option>
    {/each}
  </select>
</Field>

<Arcs selected={arcs} on:click_arc={({ detail }) => click_arc(detail)} />

<script>
  import { getContext } from "svelte";
  import Arc from "../../Weapons/Arc.svelte";
  import Arcs from "../Arcs/index.svelte";
  import { weapon_cost_mass } from "$lib/dux/weapons/rules";
  import _ from "lodash";
  import ShipItem from "$lib/components/ShipItem/index.svelte";
  import Field from "$lib/components/Field/index.svelte";
  import dux from "$lib/dux";
  import { createEventDispatcher } from "svelte";

  const all_arcs = ["FS", "F", "FP", "AP", "A", "AS"];

  export let weapon_class = 1;
  export let arcs = ["F"];
  export let id;

  let arc_options = {
    1: [6],
    2: [3, 6],
    3: [1, 2, 3, 4, 5, 6, "broadside"],
    4: [1, 2, 3, 4, 5, 6, "broadside"],
  };

  let nbr_arcs = 6;
  $: nbr_arcs = arc_options[weapon_class][0];

  $: if (arcs.length !== nbr_arcs) {
    if (nbr_arcs === "broadside") {
      arcs = all_arcs.filter((arc) => arc.length === 1);
    } else {
      let first_index = all_arcs.findIndex((arc) => arcs[0]);
      if (first_index === -1) first_index = 0;

      const new_arcs = [];

      _.range(nbr_arcs).forEach((i) => {
        new_arcs.push(all_arcs[first_index]);
        first_index = (first_index + 1) % all_arcs.length;
      });

      arcs = new_arcs;
    }
  }

  const click_arc = (first_arc) => {
    if (nbr_arcs === "broadside") return;

    let first_index = all_arcs.findIndex((arc) => arc === first_arc);

    const new_arcs = [];

    _.range(nbr_arcs).forEach((i) => {
      new_arcs.push(all_arcs[first_index]);
      first_index = (first_index + 1) % all_arcs.length;
    });

    arcs = new_arcs;
  };

  let i = 1;
  $: if (weapon_class) i = 1;

  let cache = "";
  $: cache = arcs.join(":");

  const dispatch = createEventDispatcher();

  $: dispatch("change", {
    weapon_class,
    arcs: cache.split(":"),
  });
</script>

<style>
  .arc {
    display: flex;
    flex-direction: column;
    margin-right: 1em;
  }
</style>
