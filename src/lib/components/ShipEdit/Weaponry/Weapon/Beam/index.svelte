<label>beam</label>

<Field label="beam class">
    <select bind:value={weaponClass}>
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
        <option value={4}>4</option>
    </select>
</Field>

<Field label="arcs">
    <select bind:value={nbrArcs}>
        {#each arc_options[weaponClass] || [] as nbrArcs (nbrArcs)}
            <option>{nbrArcs}</option>
        {/each}
    </select>
</Field>

<Arcs selected={arcs} on:click_arc={({ detail }) => setArcs(detail)} />

<script>
    import { getContext } from "svelte";

    import Arcs from "../Arcs.svelte";
    import ShipItem from "$lib/components/ShipItem/index.svelte";
    import Field from "$lib/components/Field/index.svelte";

    import { createEventDispatcher } from "svelte";

    const all_arcs = ["FS", "F", "FP", "AP", "A", "AS"];

    export let weaponClass = 1;
    export let arcs = ["F"];

    let arc_options = {
        1: [6],
        2: [3, 6],
        3: [1, 2, 3, 4, 5, 6, "broadside"],
        4: [1, 2, 3, 4, 5, 6, "broadside"],
    };

    $: arcsCaches = arcs.join(',');

    let nbrArcs = arcs.length;

    $: if (!arc_options[weaponClass].includes(nbrArcs)) {
        nbrArcs = arc_options[weaponClass][0];
        console.log({nbrArcs, label:"in if"})
    }

    const broadside = ["FS", "FP", "AP", "AS"];


    function setArcs(firstArc) {
        console.log(firstArc);
        if (nbrArcs === "broadside") {
            arcs = broadside;
            return;
        }
            let first_index = all_arcs.findIndex((arc) =>  arc === firstArc);
            if (first_index === -1) first_index = 0;

        console.log({arcs, label:"before"});
            arcs = _.range(nbrArcs).map(
                (i) => all_arcs[(first_index + i) % all_arcs.length]
            );
        arcsCaches = arcs.join(',');
        console.log({arcs, label:"after"});
    }

    $: if (arcs.length !== nbrArcs) setArcs(arcs[0]);

    $: console.log("it changed!", arcs)
    $: console.log("it changed!", arcsCaches)

    const dispatch = createEventDispatcher();

    $: dispatch("change", {
            weaponClass,
            arcs: arcsCaches.split(','),
        });
</script>
