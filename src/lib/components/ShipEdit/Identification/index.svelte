<div>
  <Field
    label="ship class"
    value={shipClass}
  />

  <Field label="ship type">
    <select value={shipType}>
      {#each shipTypes as name (name)}
        <option>{name}</option>
      {/each}
    </select>
  </Field>
</div>

<script>
  import Field from "$lib/components/Field/index.svelte";
    import { candidateShipTypes } from './shipTypes.js';

    export let shipClass = '';
    export let shipType = '';
    export let mass = 10;
    export let isCarrier = false;

    $: shipTypes = candidateShipTypes(mass,isCarrier).map( ({name})=>name );

    $: if( shipTypes.length >0 &&  !shipTypes.includes(shipType)) shipType= shipTypes[0];



</script>

<style>
  div {
    display: flex;
    align-items: end;
    gap: 2em;
  }
</style>
