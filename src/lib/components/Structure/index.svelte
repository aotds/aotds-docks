<Section label="hull">
  <ShipItem {cost} {mass}>
    <Field label="integrity">
      <input bind:value={rating} type="number" {min} {max} />
    </Field>
  </ShipItem>

  <Screens {...screens} on:set_screens />

  <Armour {armour} on:ship_change />

  <Cargo {...cargo} on:set_cargo />

  <Streamlining {...streamlining} />
</Section>

<script>
  import { createEventDispatcher } from "svelte";

  import Section from "../Section/index.svelte";
  import Field from "../Field/index.svelte";
  import ShipItem from "../ShipItem/index.svelte";
  import Screens from "./Screens/index.svelte";
  import Armour from "./Armour/index.svelte";
  import Cargo from "./Cargo/index.svelte";
  import Streamlining from "./Streamlining/index.svelte";

  export let cost,
    mass,
    ship_mass,
    rating,
    screens,
    armour = (0, 0, 10, 1, [], []);

  export let cargo = {};
  export let streamlining = {};

  let min, max;
  $: min = Math.ceil(ship_mass / 10);
  $: max = ship_mass;

  const dispatch = createEventDispatcher();

  $: dispatch("change_hull", { rating });
</script>

<style>
  input {
    width: 5em;
  }
</style>
