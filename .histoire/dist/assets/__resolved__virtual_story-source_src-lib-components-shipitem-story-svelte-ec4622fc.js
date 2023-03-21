const __resolved__virtual_storySource_srcLibComponentsShipitemStorySvelte = '<Hst.Story>\n  <ShipItem {mass} {cost}>Thingy</ShipItem>\n  <svelte:fragment slot="controls">\n    <Hst.Number bind:value={mass} title="Mass" />\n    <Hst.Number bind:value={cost} title="Cost" />\n  </svelte:fragment>\n</Hst.Story>\n\n<script>\n  export let Hst;\n  import ShipItem from "./ShipItem.svelte";\n  let mass = 1;\n  let cost = 3;\n<\/script>\n';
export {
  __resolved__virtual_storySource_srcLibComponentsShipitemStorySvelte as default
};
