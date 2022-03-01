import Updux from "updux";

import engine from './engine.js';

const dux = new Updux({
    subduxes: {
        engine,
    },

});

export default dux;
