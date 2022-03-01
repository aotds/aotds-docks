<!--
<Section label="carrier">
  <ShipItem {cost} {mass}>
    <Field label="bays">
      <input type="number" min="0" bind:value={bays} />
    </Field>
  </ShipItem>

  {#each squadrons as squad (squad.id)}
    <Squadron {...squad} />
  {/each}
</Section>
-->

Hey!

<script>
  import { getContext } from "svelte";

  /* import Section from "../Section/index.svelte"; */
  /* import Field from "../Field/index.svelte"; */
  /* import ShipItem from "../ShipItem/index.svelte"; */
  //  import Squadron from "./Squadron/index.svelte";
  //  import dux from "../../dux/carrier";

  export let bays = 0;
  export let squadrons = [];
  export let cost = 0;
  export let mass = 0;

  export let ship = getContext("ship");

  $: ship?.dispatch_action("set_carrier_bays", bays);
</script>
