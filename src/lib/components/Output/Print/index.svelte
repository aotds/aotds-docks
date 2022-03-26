<div class="print-output">
    <Identification
        {...ship.identification}
        reqs={ship.reqs}
    />

    <div class="section-2">
        <Hull
            structure={ship.structure}
            shipMass={ship.identification.mass}
        />

        <Systems
            firecons={ship.weaponry.firecons.nbr}
            screens={ship.structure.screens}
        />
    </div>

    <Weapons weapons={ship.weaponry.weapons} />

    <MainSystems
        ftl={ship?.propulsion?.ftl}
        engine={ship?.propulsion?.drive?.rating}
    />
</div>

<script>
    import Identification from "./Identification/index.svelte";
    import MainSystems from "./MainSystems/index.svelte";
    import Hull from "./Hull/index.svelte";
    import Weapons from "./Weapons/index.svelte";
    import Systems from "./Systems/index.svelte";

    export let ship = {};
</script>

<style>
    .print-output {
        width: 4.25in;
        height: 5.5in;
        border: 1px solid black;
        padding: 1em;
        margin: 0px auto;
    }

    .section-2 {
        display: flex;
        align-items: start;
        margin-right: 2em;
        margin-left: 2em;
    }
</style>
