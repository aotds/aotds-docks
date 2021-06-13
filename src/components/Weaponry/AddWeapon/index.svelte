<Field label="weapon type">
  <select bind:value={weapon_type}>
    <option>beam</option>
    <option value="submunition">submunition pack</option>
    <option value="pds">point defence system</option>
    <option>scattergun</option>
    <option value="needle">needle weapon</option>
  </select>

  <input
    type="button"
    value="add weapon"
    class="button small blue"
    on:click={add_weapon}
  />
</Field>

<script>
  import { getContext } from "svelte";
  import Field from "../../Field/index.svelte";

  export let weapon_type = "beam";
  export let ship = getContext("ship");

  const add_weapon = () => ship?.dispatch_action("add_weapon", weapon_type);

</script>
