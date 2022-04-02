<div>
<button class="button primary" on:click={handleSave}>save</button>

<pre><code>{json}</code></pre>
    </div>

<a style:display="none" {href} {download} bind:this={fileDownload} />

<script>
    export let ship = {};
    let json;
    $: json = JSON.stringify(ship, null, 2);

    import { fly, fade } from "svelte/transition";
    import { createEventDispatcher, getContext } from "svelte";

    const { state } = getContext("ship");

    $: json = JSON.stringify($state, null, 2);

    const dispatch = createEventDispatcher();
    const close = () => dispatch("close");

    $: href = "data:text/plain;charset=utf-8," + encodeURIComponent(json);
    $: download = ($state?.identification?.shipClass ?? "ship") + ".json";

    let fileDownload;

    function handleSave() {
        fileDownload?.click();
    }
</script>

<style>
div {
    position: relative;
}
button {
    position: absolute;
    right: 2em;
    top: 1em;
}
    pre {
        font-family: monospace;
        font-size: var(--font-scale-10);
        overflow: scroll;
        height: 90%;
    }
</style>
