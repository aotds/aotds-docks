import Beam from "./Beam.svelte";
import Submunition from "./Submunition.svelte";
import PDS from "./PDS.svelte";
import Scattergun from "./Scattergun.svelte";
import Needlebeam from "./Needlebeam.svelte";
import Graser from "./Graser/index.svelte";
import Torpedo from "./Torpedo/index.svelte";

export default {
    torpedo: Torpedo,
    graser: Graser,
    beam: Beam,
    submunition: Submunition,
    pds: PDS,
    scattergun: Scattergun,
    needle: Needlebeam,
};
