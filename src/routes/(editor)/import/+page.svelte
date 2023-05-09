<article>
  <nav>
    <button class="primary" disabled={error} on:click={handleSet}>set </button>
    <div class="max" />

    <div class="my-error">
      {#if error}
        invalid
      {/if}
    </div>

    <button class="primary" on:click={() => fileInput.click()}
      ><i>upload</i> upload</button
    >
  </nav>
  <div class="support">
    both <code>json</code> and <code>yaml</code> formats are supported
  </div>
  <textarea rows="20" bind:value={stringData} />
  <input
    bind:this={fileInput}
    bind:files
    type="file"
    on:change={handleUpload}
  />
</article>

<script>
  import { clipboard } from "$lib/actions/clipboard.js";
  import { getContext } from "svelte";
  import yaml from "yaml";
  import { goto } from "$app/navigation";

  export let format = "json";

  let fileInput;
  let files;
  const handleUpload = async () => {
    stringData = await files[0].text();
  };

  const api = getContext("api");

  let shipData = api.svelteStore;

  let stringData = JSON.stringify($shipData, null, 2);

  let serialized = {};
  let error = false;
  $: try {
    error = false;
    serialized = yaml.parse(stringData);
  } catch (e) {
    error = true;
  }

  async function handleSet() {
    if (await window.confirm("import ship (and clobber the current one)?")) {
      api?.dispatch?.importShip?.(serialized);
      goto("/editor");
    }
  }
</script>

<style>
  article {
    background-color: var(--primary-container);
  }
  button {
    font-size: var(--font-scale-10);
  }
  nav {
    margin-bottom: 1em;
  }
  .my-switch {
    display: flex;
    align-items: center;
  }
  .my-switch > span {
    display: inline-block;
    font-size: var(--font-scale-10);
  }
  label {
    margin: 0px 0.5rem;
  }
  textarea {
    width: 100%;
    height: 70vh;
  }
  .support {
    margin-bottom: 1rem;
    text-align: right;
  }
  .my-error {
    color: red;
    font-size: var(--font-scale-11);
  }
  input[type="file"] {
    position: inherit;
    visibility: hidden;
  }
</style>
