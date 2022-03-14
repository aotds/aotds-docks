<div class="identification-row">
    <Identification {...$shipState.identification} {...$shipState.reqs} />

    <ShipCost {...$shipState.reqs} />
</div>

<Propulsion propulsion={$shipState.propulsion}/>

<Structure {...$shipState.structure} />

<Weaponry {...$shipState.weaponry}/>

<Carrier {...$shipState.carrier} />

<script>
    import { getContext } from "svelte";

    import Identification from "./Identification/index.svelte";
    import ShipCost from "./ShipCost.svelte";
    import Propulsion from "./Propulsion/index.svelte";
    import Structure from "./Structure/index.svelte";
    import Carrier from "./Carrier/index.svelte";
    import Weaponry from "./Weaponry/index.svelte";

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
