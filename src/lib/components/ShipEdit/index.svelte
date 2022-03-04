<div class="identification-row">
    <Identification {...$shipState.identification} {...$shipState.reqs} />

    <ShipCost {...$shipState.reqs} />
</div>

<Propulsion propulsion={$shipState.propulsion}/>

<Structure {...$shipState.structure} />

<script>
    import { getContext } from "svelte";

    import Identification from "./Identification/index.svelte";
    import ShipCost from "./ShipCost.svelte";
    import Propulsion from "./Propulsion/index.svelte";
    import Structure from "./Structure/index.svelte";

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
