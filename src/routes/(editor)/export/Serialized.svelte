<article>
  <nav>
    <button
      use:clipboard={{ text: data }}
      on:copied={copied}
      on:error={copyError}>{copyLabel} <i>content_paste</i></button
    >
    <button on:click={handleSave}>download <i>download</i></button>
    <div class="field suffix border">
      <select bind:value={format}>
        <option>json</option>
        <option>yaml</option>
      </select>
      <i>arrow_drop_down</i>
    </div>
  </nav>
  <pre><code>{serialized}</code></pre>
  <a hidden {href} {download} bind:this={fileDownload} />
</article>

<script>
  import { clipboard } from "$lib/actions/clipboard.js";
  import yaml from "yaml";

  export let data = {};
  export let serialized = "Loading...";
  export let format = "json";

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

  const serialize = async (data, format) => {
    if (format === "json") return JSON.stringify(data, null, 2);

    return yaml.stringify(data);
  };

  $: serialize(data, format).then((s) => (serialized = s));
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
</style>
