<h1>
    ship name: <div class="fill" />
</h1>

<div class="details">
    <h2>
        {#if shipClass}
        {shipClass}-class,
{/if}
        {shipType}</h2>
    <div class="reqs">
        <Cost cost={cost} />
        &nbsp;
        <Mass mass={mass} />
    </div>
</div>

<script>
    import Cost from "../../../Cost.svelte";
    import Mass from "$lib/components/Mass.svelte";

    export let shipClass;
    export let shipType;
    export let cost = 0;
    export let mass = 0;
</script>

<style>
    h1 {
        width: 100%;
        display: flex;
        font-size: var(--font-scale-8);
    }
    h2 {
        font-size: var(--font-scale-7);
        flex: 1;
    }
    .fill {
        margin-left: 0.5em;
        display: inline-block;
        flex: 1;
        border-bottom: 1px solid black;
    }
    .details {
        display: flex;
        align-items: baseline;
    }
    .reqs {
        display: flex;
    }
</style>
