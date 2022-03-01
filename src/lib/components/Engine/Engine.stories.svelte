<Meta
  title="Engine"
  component={Engine}
  argTypes={{
    rating: { type: "number", defaultValue: 6 },
    advanced: { type: "boolean", defaultValue: false },
    reqs: { type: "object", defaultValue: { cost: 6, mass: 3 } },
  }}
/>

<Story name="Primary" args={{}} />

<Template let:args>
  <div style="width: 50em">
    <Engine {...args} />
  </div>
</Template>

<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  import { action } from "@storybook/addon-actions";

  import { setContext } from "svelte";

  import Engine from "./index.svelte";

  setContext("ship", {
    dispatch: (type, detail) => action(type)(detail),
  });

  let advanced = false;
  let rating = 0;
</script>
