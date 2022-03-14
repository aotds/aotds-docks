import { Updux } from 'updux';

import hull from './hull.js';
import screens from './screens.js';
import cargo from './cargo.js';
import armor from './armor.js';
import streamlining from './streamlining.js';

const dux = new Updux({
    subduxes: { hull, screens, cargo, streamlining, armor }
});
export default dux;

