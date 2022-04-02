<Meta title="Output/Print/Systems/Screens" component={Screens} argTypes={{
    standard: { defaultValue: 3 },
    advanced: { defaultValue: 3 },
}} />

<Story name="Primary" args={{}} />

<Template let:args>
  <div style="width: 50em">
    <Screens {...args}/>
  </div>
</Template>

<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";

  import Screens from './index.svelte';
</script>
