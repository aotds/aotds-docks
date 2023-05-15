import SML from "./index.svelte";

export default {
    title: "Salvo Missile Launcher",
    component: SML,
};

export const Primary = {
    render: (args) => ({
        Component: SML,
        props: args,
    }),
    args: {
        availableMissileMagazineIds: [1, 2, 3],
        missileMagazineId: 1,
        arcs: ["F", "FS", "FP"],
    },
};
