<div class="magazine">
  <div class="field label">
    <input
      type="number"
      min={unused ? 0 : 1}
      disabled={unused}
      bind:value={maxAmmo}
    />
    <label class="active">magazine {id}</label>
  </div>
  <label class="checkbox">
    <input type="checkbox" bind:checked={extended} disabled={unused} />
    <span>extended range</span>
  </label>
</div>

<script>
  import { getContext } from "svelte";

  export let id = 1;
  export let maxAmmo = 0;
  export let extended = false;
  export let unused = false;

  export let api = getContext("api");

  $: api?.dispatch?.setMissileMagazine?.(id, maxAmmo, extended);
</script>

<style>
  .magazine {
    max-width: 20em;
    margin-right: 2em;
  }
  .magazine input {
    max-width: 8em;
    text-align: center;
  }
  .field {
    margin-bottom: 1em;
  }
</style>
