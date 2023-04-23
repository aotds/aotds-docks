<article>
  <nav>
    <button
      use:clipboard={{ text: shipJson }}
      on:copied={copied}
      on:error={copyError}>{copyLabel} <i>content_paste</i></button
    >
    <button on:click={handleSave}>download <i>download</i></button>
  </nav>
  <pre><code>{shipJson}</code></pre>
  <a hidden {href} {download} bind:this={fileDownload} />
</article>

<script>
  import { getContext } from "svelte";
  import { clipboard } from "svelte-copy-clipboard-action";
  import { stringify } from "yaml";

  // TODO copy
  const api = getContext("api");

  let shipData = api.getState();
  api.subscribe(() => (shipDate = api.getState()));

  let copyLabel = "clipboard";

  const copied = () => {
    copyLabel = "copied!";
    setTimeout(() => (copyLabel = "clipboard"), 2000);
  };

  const copyError = () => {
    copyLabel = "error copying";
    setTimeout(() => (copyLabel = "clipboard"), 2000);
  };

  $: shipJson = stringify(shipData, null, 2);

  $: href = "data:text/plain;charset=utf-8," + encodeURIComponent(shipJson);
  $: download = (shipData?.identification?.shipClass || "ship") + ".yml";

  let fileDownload;

  function handleSave() {
    fileDownload?.click();
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
    position: absolute;
    right: 5em;
  }
</style>
