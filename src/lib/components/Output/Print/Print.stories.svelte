<Meta
  title="Output/Print"
  component={Print}
  argTypes={{
    isMovable: { defaultValue: false },
  }}
/>

<Story name="Primary" args={{}} />

<Template let:args>
  <div style="width: 50em; positive: relative;">
    <Print ship={$shipState} {...args} />
  </div>
</Template>

<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  import { action } from "@storybook/addon-actions";

  import { setContext } from "svelte";

  import sample from "./sample.js";
  import shipStore from "$lib/store/ship.js";

  const ship = shipStore(sample);

  setContext("ship", ship);

  const shipState = ship.state;

  import Print from "./index.svelte";
</script>
