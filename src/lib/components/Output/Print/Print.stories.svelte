<Meta title="Output/Print" component={Print} argTypes={{
    ship: {
        type: 'object',
        defaultValue: sample
    }
}} />

<Story name="Primary" args={{}} />

<Template let:args>
  <div style="width: 50em">
    <Print ship={sample}/>
  </div>
</Template>

<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  import { action } from "@storybook/addon-actions";

  import sample from './sample.js';

  import Print from './index.svelte';
</script>
