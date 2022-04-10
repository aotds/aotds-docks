<div>
  <Armour armour={structure.armour} />
  <Integrity
    {isMovable}
    hull={structure?.hull}
    rating={structure.hull.rating}
    advanced={structure.hull.advanced}
    {ship_mass}
  />
</div>

<script>
  import Integrity from "./Integrity/index.svelte";
  import Armour from "./Armor.svelte";

  export let structure = {};
  export let ship_mass = 0;
  export let isMovable = false;
</script>
