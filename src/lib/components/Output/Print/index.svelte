<aside class="ship-sheet" transition:fade>
  <Identification {...ship.general} />

  <Weapons weapons={ship.weaponry.weapons} />

  <div class="section-2">
    <Hull structure={ship.structure} ship_mass={ship.general.mass} />

    <Systems
      firecons={ship.weaponry.firecons.nbr}
      screens={ship.structure.screens}
    />
  </div>

  <MainSystems ftl={ship.ftl.type} engine={ship.engine.rating} />
</aside>

<script>
  import _ from "lodash";

  import Identification from "./Identification/index.svelte";
  import MainSystems from "./MainSystems/index.svelte";
  import Hull from "./Hull/index.svelte";
  import Weapons from "./Weapons/index.svelte";
  import Systems from "./Systems/index.svelte";

  export let ship;

  import { fly, fade } from "svelte/transition";
</script>

<style>
  .ship-sheet {
    width: 4.25in;
    height: 5.5in;
    border: 1px solid black;
    padding: 1em;
  }

  .section-2 {
    display: flex;
    align-items: start;
  }
</style>
