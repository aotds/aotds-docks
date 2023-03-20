<Meta
  title="ShipEdit/Propulsion/Drive"
  component={Drive}
  argTypes={{
    rating: { type: "number", defaultValue: 6 },
    advanced: { type: "boolean", defaultValue: false },
    reqs: { type: "object", defaultValue: { cost: 6, mass: 3 } },
  }}
/>

<Story name="Primary" args={{}} />

<Template let:args>
  <div style="width: 50em">
    <Drive {...args} />
  </div>
</Template>

<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  import { action } from "@storybook/addon-actions";

  import { setContext } from "svelte";

  import Drive from "./index.svelte";

  setContext("ship", {
      dispatch: {
          setDrive: action('setDrive')
      },
  });

  let advanced = false;
  let rating = 0;
</script>
