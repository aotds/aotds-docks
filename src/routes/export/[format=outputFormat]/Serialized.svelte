<article>
  <nav>
    <button
      use:clipboard={{ text: data }}
      on:copied={copied}
      on:error={copyError}>{copyLabel} <i>content_paste</i></button
    >
    <button on:click={handleSave}>download <i>download</i></button>
  </nav>
  <pre><code>{data}</code></pre>
  <a hidden {href} {download} bind:this={fileDownload} />
</article>

<script>
  import { clipboard } from "$lib/actions/clipboard.js";

  export let data = "Loading...";
  export let format;

  let copyLabel = "clipboard";

  const copied = () => {
    copyLabel = "copied!";
    setTimeout(() => (copyLabel = "clipboard"), 2000);
  };

  const copyError = () => {
    copyLabel = "error copying";
    setTimeout(() => (copyLabel = "clipboard"), 2000);
  };

  $: href = "data:text/plain;charset=utf-8," + encodeURIComponent(data);
  $: download = (data?.identification?.shipClass || "ship") + "." + format;

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
