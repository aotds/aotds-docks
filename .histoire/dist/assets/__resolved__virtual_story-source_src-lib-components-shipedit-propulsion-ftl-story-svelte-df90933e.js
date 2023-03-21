const __resolved__virtual_storySource_srcLibComponentsShipeditPropulsionFtlStorySvelte = '<Hst.Story title="ShipEdit/Propulsion/Ftl">\n  <Ftl {api} />\n</Hst.Story>\n\n<script>\n  export let Hst;\n  import { logEvent } from "histoire/client";\n\n  const api = {\n    dispatch: {\n      setFtl: (ftl) => logEvent("setFtl", { ftl }),\n    },\n  };\n\n  import Ftl from "./Ftl.svelte";\n  import "$lib/components/GlobalStyle.svelte";\n<\/script>\n';
export {
  __resolved__virtual_storySource_srcLibComponentsShipeditPropulsionFtlStorySvelte as default
};
