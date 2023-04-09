<ShipItem {...reqs}>
  <div class="weapon_row">
    <button class="button small red remove" on:click={remove}>remove </button>

    <svelte:component this={component[type]} {...specs} on:change={update} />
  </div>
</ShipItem>

<script>
  import { getContext } from "svelte";

  import Arc from "./Arc.svelte";
  import ShipItem from "$lib/components/ShipItem.svelte";
  import Field from "$lib/components/Field.svelte";
  import Beam from "./Beam/index.svelte";
  import Submunition from "./Submunition.svelte";
  import PointDefenceSystem from "./PDS.svelte";
  import Scattergun from "./Scattergun.svelte";
  import Needle from "./Needle.svelte";

  const component = {
    beam: Beam,
    submunition: Submunition,
    pds: PointDefenceSystem,
    scattergun: Scattergun,
    needle: Needle,
  };

  export let reqs = {};
  export let specs = {};
  export let id;

  const api = getContext("api");

  $: type = specs.type;

  const remove = () => api?.dispatch?.removeWeapon?.(id);

  const update = ({ detail }) => {
    console.log({ id, type });
    api?.dispatch?.setWeapon?.(id, {
      type,
      ...detail,
    });
  };
</script>

<style>
  button {
    width: inherit;
  }
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
