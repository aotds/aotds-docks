import { Updux } from 'updux';

import hull from './hull.js';
import screens from './screens.js';

const dux = new Updux({
    subduxes: { hull, screens }
});
export default dux;
