<Meta title="Output/Print/Structure/Integrity" component={Integrity} argTypes={{
    shipMass: {defaultValue:50},
    rating: {defaultValue:14},
    advanced: {defaultValue:false},
}} />

<Story name="Primary" args={{}} />
<Story name="Advanced" args={{ advanced: true }} />

<Template let:args>
  <div style="width: 50em">
    <Integrity {...args} />
  </div>
</Template>

<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";

  import Integrity from './index.svelte';
</script>
