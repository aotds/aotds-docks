<Hst.Story title="Export/PrintShip/Weapons">
  <svelte:component this={weaponComp} {...initial} />

  <svelte:fragment slot="controls">
    <Hst.Select bind:value={type} {options} title="weapon type" />
  </svelte:fragment>
</Hst.Story>

<script>
  import printComps from "./printComps.js";
  import { weaponTypes } from "$lib/store/ship/weaponry/rules.ts";

  export let Hst;

  const types = weaponTypes.map(({ type }) => type);
  let type = types[0];

  $: options = Object.fromEntries(types.map((t) => [t, t]));

  $: initial = types.find((t) => t.type === type)?.initial ?? {};
  $: weaponComp = printComps[type];
</script>
