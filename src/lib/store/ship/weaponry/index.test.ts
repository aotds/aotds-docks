import { weaponryDux } from "./index.ts";

test("sml and magazine", () => {
    const store = weaponryDux.createStore();

    expect(store.getState().missileMagazines).toHaveLength(0);

    store.dispatch.addWeapon("sml");
    store.dispatch.addWeapon("sml");
    expect(store.getState().missileMagazines).toHaveLength(2);

    expect(store.getState().missileMagazines[0]).toMatchObject({
        extended: false,
        maxAmmo: 1,
    });

    store.dispatch.setMissileMagazine(1, 3, true);

    expect(store.getState().missileMagazines[0]).toMatchObject({
        extended: true,
        maxAmmo: 3,
    });

    store.dispatch.addWeapon("sml");
    expect(store.getState().missileMagazines).toHaveLength(3);

    expect(store.getState().missileMagazines[2]).toHaveProperty("id", 3);
    // they all get assigned '1' at birth
    expect(store.getState().weapons[2].specs).toHaveProperty(
        "missileMagazineId",
        1
    );

    store.dispatch.setWeapon(3, {
        missileMagazineId: 3,
        arcs: ["F", "FS", "FP"],
    });

    expect(store.getState().weapons[2].specs).toHaveProperty(
        "missileMagazineId",
        3
    );

    store.dispatch.removeWeapon(store.getState().weapons[1].id);

    expect(store.getState().missileMagazines).toHaveLength(2);

    console.log(store.getState());

    expect(store.getState().weapons[1].specs.missileMagazineId).toEqual(2);
    expect(store.getState().missileMagazines[1].id).toEqual(2);
});
