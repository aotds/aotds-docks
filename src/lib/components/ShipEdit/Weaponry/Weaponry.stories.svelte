<Meta title="ShipEdit/Weaponry" component={Weaponry} argTypes={{}} />

<Story name="Primary" args={{}} />

<Template let:args>
  <div style="width: 50em">
    <Weaponry {...args} {...$state}/>
  </div>
</Template>

<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  import { action } from "@storybook/addon-actions";

  import { setContext } from "svelte";
import { readable, get, derived } from "svelte/store";

  import Weaponry from "./index.svelte";
  import weaponryDux from '$lib/shipDux/weaponry/index.js';

  const store = weaponryDux.createStore();
  const state = readable(store.getState(), (set) => {
    store.subscribe(() => {
          console.log(store.getState());
      set(store.getState());
    });
  });

  setContext("ship", {
      dispatch: store.dispatch,
      shipMass: readable(50),
      state,
  });
</script>
