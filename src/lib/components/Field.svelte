<div class="field label small" class:suffix>
  <slot>
    <input id={formId} type="text" bind:value on:change />
  </slot>
  {#if label}
    <label for={formId} class:active>{label}</label>
  {/if}
</div>

<script>
  import { getContext } from "svelte";

  export let label = "";
  export let value = true;
  export let placeholder = label;

  export let suffix = false;
  export let activeLabel = undefined;
  export let idPrefix = "formId";

  $: active = typeof activeLabel === "boolean" ? activeLabel : value;

  const genUid = getContext("genUid") ?? (() => "genUid missing");

  const formId = genUid(idPrefix);
</script>

<style>
  div {
    font-family: var(--main-font-family);
  }
  /*
  div > :global(*) {
    margin-left: 1em;
  }
  div > label {
    margin-left: 0em;
  }
  label {
    font-size: var(--font-scale-8);
    font-weight: lighter;
    font-family: Dosis;
    color: var(--indigo-dye);
  }
  */
  .field {
    margin-bottom: 0px;
  }
</style>
