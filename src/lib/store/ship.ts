import Updux from "updux";

import identification from "./ship/identification";

const shipDux = new Updux({
    subduxes: {
        identification,
    },
});

export default shipDux;
