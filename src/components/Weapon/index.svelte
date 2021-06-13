<ShipItem {cost} {mass}>
  <div class="weapon_row">
    <input
      type="button"
      class="button small red remove"
      value="remove"
      on:click={remove}
    />

    <svelte:component
      this={weapon_component[weapon_type]}
      {...weapon}
      on:change={update}
    />
  </div>
</ShipItem>

<script>
  import { getContext } from "svelte";

  import Arc from "../Weapons/Arc.svelte";
  import { weapon_cost_mass } from "../../dux/weapons/rules.js";
  import _ from "lodash";
  import { createEventDispatcher } from "svelte";
  import ShipItem from "../ShipItem/index.svelte";
  import Field from "../Field/index.svelte";
  import Beam from "./Beam/index.svelte";
  import Submunition from "./Submunition/index.svelte";
  import PointDefenceSystem from "./PointDefenceSystem/index.svelte";
  import Scattergun from "./Scattergun/index.svelte";
  import Needle from "./Needle/index.svelte";
  import dux from "../../dux";

  const weapon_component = {
    beam: Beam,
    submunition: Submunition,
    pds: PointDefenceSystem,
    scattergun: Scattergun,
    needle: Needle,
  };

  export let weapon = {};
  export let id;
  export let cost;
  export let mass;
  export let ship = getContext("ship");

  let weapon_type = weapon.weapon_type;

  const remove = () => ship?.dispatch_action("remove_weapon", id);

  const update = ({ detail }) => {
    ship?.dispatch_action("set_weapon", {
      id,
      weapon_type,
      ...detail,
    });
  };

</script>

<style>
  .weapon {
    display: flex;
    align-items: center;
  }

  .weapon > * {
    margin-right: 2em;
  }

  .arcs {
    display: grid;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    align-items: center;
    justify-items: center;
    width: 6em;
  }

  .arc input {
    margin: 0px;
  }

  .arc.F {
    grid-column: 2 / span 2;
    grid-row: 1;
  }

  .arc.FS {
    grid-column: 1;
    grid-row: 1 / span 2;
  }

  .arc.FP {
    grid-column: 4;
    grid-row: 1 / span 2;
  }

  .arc.AS {
    grid-column: 1;
    grid-row: 3 / span 2;
  }

  .arc.AP {
    grid-column: 4;
    grid-row: 3 / span 2;
  }

  .arc.A {
    grid-column: 2 / span 2;
    grid-row: 4;
  }

  .add-weapon {
    display: block;
  }

  .weapon_row {
    display: flex;
    align-items: center;
  }

  .weapon_row > :global(*) {
    margin-right: 2em;
  }

</style>
