<div class="field label small" class:suffix>
  <slot>
    <input type="text" bind:value on:change />
  </slot>
  {#if label}
    <label class:active={!!value}>{label}</label>
  {/if}
</div>

<script>
  export let label = "";
  export let value = true;
  export let placeholder = label;

  export let suffix = false;
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
