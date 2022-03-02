<div class="identification-row">
    <Identification {...$shipState.identification} {...$shipState.reqs} />

    <ShipCost {...$shipState.reqs} />
</div>

<script>
    import { getContext } from "svelte";

    import Identification from "./Identification/index.svelte";
    import ShipCost from "./ShipCost.svelte";

    const { state: shipState } = getContext("ship");
</script>

<style>
    .identification-row {
        display: flex;
    }

    .identification-row :global(> *:first-child) {
        flex: 1;
    }
</style>
