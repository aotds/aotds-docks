<div>
  <Identification {...$state.identification} />

  <Weapons weapons={$state.weaponry.weapons} />

  <MainSystems ftl={$state?.propulsion?.ftl}
        engine={$state?.propulsion?.drive?.rating} />
</div>
<!--
<aside class="ship-sheet" transition:fade>


  <div class="section-2">
    <Hull structure={ship.structure} ship_mass={ship.general.mass} />

    <Systems
      firecons={ship.weaponry.firecons.nbr}
      screens={ship.structure.screens}
    />
  </div>

</aside>
-->

<script>
import { getContext } from 'svelte';
  /* import _ from "lodash"; */

  import Identification from "./Identification/index.svelte";
  import MainSystems from "./MainSystems/index.svelte";
  /* import Hull from "./Hull/index.svelte"; */
   import Weapons from "./Weapons/index.svelte";
  /* import Systems from "./Systems/index.svelte"; */

  /* export let ship; */
    const { state } = getContext('ship');

  /* import { fly, fade } from "svelte/transition"; */
</script>

<style>
  div {
    width: 4.25in;
    height: 5.5in;
    border: 1px solid black;
    padding: 1em;
    margin: 0px auto;
  }

  .section-2 {
    display: flex;
    align-items: start;
  }

</style>
