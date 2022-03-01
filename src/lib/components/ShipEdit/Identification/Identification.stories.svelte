<Meta
  title="Identification"
  component={Identification}
  argTypes={{
  }}
/>

<Story name="Primary" args={{}} />

<Template let:args>
  <div style="width: 50em">
    <Identification {...args} />
  </div>
</Template>

<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  import { action } from "@storybook/addon-actions";

  import { setContext } from "svelte";

  import Identification from "./index.svelte";

  setContext("ship", {
    dispatch: (type, detail) => action(type)(detail),
  });

</script>
