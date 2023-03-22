import { reqs, type Reqs } from "$lib/shipDux/reqs";
import Updux, { createPayloadAction } from "updux";
import u from "@yanick/updeep-remeda";

type DriveProps = {
    rating: number;
    advanced: boolean;
};

const initial: DriveProps & { reqs: Reqs } = {
    rating: 0,
    advanced: false,
    reqs,
};

const setDrive = createPayloadAction<DriveProps>("setDrive");
const setDriveReqs = createPayloadAction<Reqs>("setDriveReqs");

const dux = new Updux({
    initial,
    actions: { setDrive, setDriveReqs },
});

export default dux;

dux.addMutation(setDrive, (change) => u(change));
dux.addMutation(setDriveReqs, (reqs) => u({ reqs }));

export function calcDriveReqs(
    shipMass: number,
    rating: number,
    advanced = false
) {
    const mass = Math.ceil(rating * 0.05 * shipMass);
    const cost = mass * (advanced ? 3 : 2);

    return { mass, cost };
}
