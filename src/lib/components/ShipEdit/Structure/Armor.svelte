<ShipItem {...reqs}>
  <div>
    <div class="nbr_layers">
      <Field label="armour layers">
        <input class="short" type="number" min="0" bind:value={nbr_layers} />
      </Field>
    </div>

    <div class="layers">
      {#each layers as rating, i (i)}
        <Layer {rating} layer={i + 1} />
      {/each}
    </div>
  </div>
</ShipItem>

<script>
  import { getContext } from "svelte";
  import ShipItem from "$lib/components/ShipItem.svelte";
  import Field from "$lib/components/Field.svelte";
  import Layer from "./Armor/Layer.svelte";

  export let layers = [];
  export let reqs = {};

  let nbr_layers = layers.length;

  const api = getContext("api");

  $: api?.dispatch.setNbrArmorLayers(nbr_layers);
</script>

<style>
  .layers {
    display: flex;
  }

  input {
    width: 5em;
  }
</style>
