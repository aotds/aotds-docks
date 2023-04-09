const __resolved__virtual_storySource_srcLibComponentsShipeditPropulsionEngineStorySvelte = '<Hst.Story title="ShipEdit/Propulsion/Engine">\n  <Engine {api} />\n</Hst.Story>\n\n<script>\n  export let Hst;\n  import { logEvent } from "histoire/client";\n\n  const api = {\n    dispatch: {\n      setEngine: (engine) => logEvent("setEngine", { engine }),\n    },\n  };\n\n  import Engine from "./Engine.svelte";\n  import "$lib/components/GlobalStyle.svelte";\n<\/script>\n';
export {
  __resolved__virtual_storySource_srcLibComponentsShipeditPropulsionEngineStorySvelte as default
};
