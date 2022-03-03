import { Updux } from "updux";
import u from 'updeep';

import drive from './drive.js';

const dux = new Updux({
  subduxes: {
        drive
  },
});

export default dux;
