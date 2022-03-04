import { Updux } from 'updux';

import hull from './hull.js';

const dux = new Updux({
    subduxes: { hull }
});
export default dux;
