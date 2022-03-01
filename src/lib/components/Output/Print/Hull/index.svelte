<div>
  <Armour armour={structure.armour} />
  <Integrity
    rating={structure.hull.rating}
    advanced={structure.hull.advanced}
    {ship_mass}
  />
</div>

<script>
  import Integrity from "./Integrity/index.svelte";
  import Armour from "./Armour/index.svelte";

  export let structure = {};
  export let ship_mass = 0;
</script>
