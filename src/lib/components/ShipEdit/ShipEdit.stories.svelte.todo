<Meta title="ShipEdit" component={ShipEdit} argTypes={{}} />

<Story name="Primary" args={{}} />

<Template let:args>
  <div style="width: 50em">
    <ShipEdit />
  </div>
</Template>

<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  import { action } from "@storybook/addon-actions";

  import { setContext } from "svelte";

  import ShipEdit from "./index.svelte";
  import shipStore from "$lib/store/ship.js";

  setContext("ship", shipStore());
</script>
