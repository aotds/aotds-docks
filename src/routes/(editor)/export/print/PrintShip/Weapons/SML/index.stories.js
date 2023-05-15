import SML from "./index.svelte";

export default {
    title: "PrintShip/Weapons/SML",
    component: SML,
    tags: ["autodocs"],
};

export const Primary = {
    args: {
        magazine: {
            maxAmmo: 3,
        },
        launchers: [{ arcs: ["F"] }, { arcs: ["FS"] }],
    },
};
