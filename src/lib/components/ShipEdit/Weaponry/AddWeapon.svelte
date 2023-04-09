<div>
  <Field label="">
    <select bind:value={type}>
      {#each weaponTypes as weapon (weapon.type)}
        <option value={weapon.type}>{weapon.name}</option>
      {/each}
    </select>
  </Field>
  <button class="button small primary" on:click={addWeapon}>add weapon</button>
</div>

<script>
  import { getContext } from "svelte";
  import Field from "../../Field.svelte";

  import { weaponTypes } from "$lib/store/ship/weaponry/rules";

  export let api = getContext("api");

  let type = weaponTypes[0].type;

  const addWeapon = () => api?.dispatch?.addWeapon?.(type);
</script>

<style>
  select {
    width: inherit;
    display: inline-block;
  }
  button {
    width: inherit;
    display: inline-block;
  }
  div :global(.field) {
    display: flex;
    margin-right: 2em;
  }
  div {
    display: flex;
    margin-left: 5em;
    margin-bottom: 2em;
  }
</style>
