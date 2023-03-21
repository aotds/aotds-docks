<div class="mass">
  <Field label="ship tonnage">
    <input class="short" bind:value={mass} type="number" min="10" max="300" />
    <img class="mass_symbol" src="{base}/mass.svg" alt="mass" />

    <div class="note" class:warning={!withinBudget}>
      {#if withinBudget}
        mass unused: {massUnused}
      {:else}
        excessive mass: {-massUnused}
      {/if}
    </div>
  </Field>
</div>

<div class="cost">
  <Field label="cost">
    <span class="cost">{cost}</span>
  </Field>
</div>

<script>
  import { base } from "$app/paths";
  import { getContext } from "svelte";
  import Field from "$lib/components/Field.svelte";

  export let api = getContext("api");

  export let mass = 10;
  export let cost = 10;
  export let usedMass = 10;

  $: massUnused = mass - usedMass;
  $: withinBudget = massUnused >= 0;

  $: api?.dispatch?.updateIdentification?.({
    reqs: { mass },
  });

  /*   const change_tonnage = ({ target: { value } }) => */
  /*     ship.dispatch(ship.actions.set_ship_mass(parseInt(value))); */

  /*   let mass_unused; */
  /*   $: mass_unused = $ship.general.mass - $ship.general.used_mass; */

  /*   let within_budget = true; */

  /*   $: within_budget = mass_unused >= 0; */
</script>

<style>
  .ship_cost {
    display: flex;
    grid-column: span 3;
    justify-content: space-around;
  }
  input {
    width: 5em;
    display: inline !important;
  }
  .mass_symbol {
    width: 0.75em;
    display: inline-block;
    margin-left: 0.5em;
  }
  .warning {
    color: red;
  }
  .note {
    font-size: smaller;
  }

  .mass,
  div.cost {
    padding: 0px 2em;
    justify-self: right;
  }

  .mass {
    width: 15em;
  }
  div.cost {
    grid-column: 3;
  }
  span.cost:after {
    content: "\00A4";
    margin-left: 0.5em;
  }
</style>
