import { Updux } from "updux";
import u from 'updeep';

import drive from './drive.js';
import ftl from './ftl.js';

const dux = new Updux({
  subduxes: {
        drive, ftl
  },
});

export default dux;
