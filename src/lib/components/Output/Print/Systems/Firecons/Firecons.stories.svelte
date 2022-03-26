<Meta title="Output/Print/Systems/Firecons" component={Firecons} argTypes={{
    firecons: { defaultValue: 2, type: 'number' }
}} />

<Story name="Primary" args={{}} />

<Template let:args>
  <div style="width: 50em">
    <Firecons {...args}/>
  </div>
</Template>

<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";

  import Firecons from './index.svelte';
</script>
