import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { reqs, Reqs } from "../reqs";

type DriveProps = {
    rating: number;
    advanced: boolean;
};

export const initialState: DriveProps & { reqs: Reqs } = {
    rating: 0,
    advanced: false,
    reqs,
};

const driveSlice = createSlice({
    initialState,
    name: "drive",
    reducers: {
        setDrive: (state, action: PayloadAction<DriveProps>) => {
            state.rating = action.payload.rating;
            state.advanced = action.payload.advanced;
        },
        setDriveReqs: (state, action: PayloadAction<Reqs>) => {
            state.reqs = action.payload;
        },
    },
});

export const { actions, reducer } = driveSlice;

/*
// needs to be at the top level
export const calculateDriveReqs = (store) =>
  createSelector(
    [
      (ship) => ship.reqs.mass,
      (ship) => ship.propulsion.drive.rating,
      (ship) => ship.propulsion.drive.advanced,
    ],
    (ship_mass, rating, advanced) =>
      store.dispatch.setDriveReqs(calcDriveReqs(ship_mass, rating, advanced))
  );

*/
