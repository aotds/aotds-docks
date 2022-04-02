<Meta title="Output/Print/Structure/Armor" component={Armor} argTypes={{
    armor: {
        type: 'object',
        defaultValue: [2,4],
    }
}} />

<Story name="Primary" args={{}} />

<Template let:args>
  <div style="width: 50em">
    <Armor {...args} />
  </div>
</Template>

<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";

  import Armor from './Armor.svelte';


</script>
