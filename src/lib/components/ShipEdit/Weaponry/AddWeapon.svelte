<Field label="weapon type">
  <select bind:value={type}>
    {#each weaponTypes as weapon (weapon.type)}
      <option value={weapon.type}>{weapon.name}</option>
    {/each}
  </select>

  <button class="button small primary" on:click={addWeapon}>add weapon</button>
</Field>

<script>
  import { getContext } from "svelte";
  import Field from "../../Field/index.svelte";

  import { weaponTypes } from "$lib/shipDux/weaponry/weapons";

  export let ship = getContext("ship");

  let type = weaponTypes[0].value;

  const addWeapon = () => ship.dispatch.addWeapon(type);
</script>

<style>
  select {
    width: inherit;
    display: inline-block;
  }
</style>
