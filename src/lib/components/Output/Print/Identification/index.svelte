<h1>
    ship name: <div class="fill" />
</h1>

<div class="details">
    <h2>{shipClass}-class, {shipType}</h2>
    <div class="reqs">
        <Cost cost={reqs.cost} />
        &nbsp;
        <Mass mass={reqs.mass} />
    </div>
</div>

<script>
    import Cost from "../../../Cost.svelte";
    import Mass from "$lib/components/Mass.svelte";

    export let shipClass;
    export let shipType;
    export let reqs = {};
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
