<Meta title="ShipEdit/Carrier" component={Carrier} argTypes={{
    armor: {
        type: 'object',
        defaultValue: [2,4],
    }
}} />

<Story name="Primary" args={{}} />

<Template let:args>
  <div style="width: 50em">
    <Carrier {...args} {...$state}/>
  </div>
</Template>

<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  import { action } from "@storybook/addon-actions";

  import { setContext } from "svelte";
import { readable, get, derived } from "svelte/store";

  import Carrier from "./index.svelte";
  import carrierDux from '$lib/shipDux/carrier.js'

  const carrierStore = carrierDux.createStore();
  const state = readable(carrierStore.getState(), (set) => {
    carrierStore.subscribe(() => {
      set(carrierStore.getState());
    });
  });

  setContext("ship", {
      dispatch: carrierStore.dispatch,
      shipMass: readable(50),
      state,
  });
</script>
