import { Updux } from "updux";
import u from "updeep";

const dux = new Updux({
  actions: {
    setShipType: null,
    setShipClass: null,
  },
  initial: {
    shipType: "",
    shipClass: "",
    isCarrier: false,
    mass: 10,
  },
});

dux.setMutation("setShipType", (shipType) => u({ shipType }));
dux.setMutation("setShipClass", (shipClass) => u({ shipClass }));

export default dux;
