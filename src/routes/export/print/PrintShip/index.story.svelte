<Hst.Story title="Export/PrintShip">
  <PrintShip {...ship} />
</Hst.Story>

<script>
  import PrintShip from "./index.svelte";

  export let Hst;

  const ship = {
    schemaVersion: "1",
    identification: {
      shipType: "Scout",
      shipClass: "Bonobo",
      isCarrier: false,
      reqs: {
        mass: 10,
        cost: 10,
        usedMass: 4,
      },
    },
    structure: {
      streamlining: {
        type: "none",
        reqs: {
          cost: 0,
          mass: 0,
        },
      },
      cargo: {
        space: 0,
        reqs: {
          cost: 0,
          mass: 0,
        },
      },
      hull: {
        rating: 0,
        min: 1,
        max: 10,
        reqs: {
          cost: 0,
          mass: 0,
        },
      },
      screens: {
        standard: 0,
        advanced: 0,
        reqs: {
          cost: 0,
          mass: 0,
        },
      },
      armor: {
        reqs: {
          cost: 0,
          mass: 0,
        },
        layers: [],
      },
      carrier: {
        nbrBays: 0,
        squadrons: [],
        reqs: {
          cost: 0,
          mass: 0,
        },
      },
    },
    propulsion: {
      ftl: {
        reqs: {
          cost: 2,
          mass: 1,
        },
        type: "standard",
      },
      drive: {
        rating: 1,
        advanced: false,
        reqs: {
          cost: 2,
          mass: 1,
        },
      },
    },
    carrier: {
      nbrBays: 0,
      squadrons: [],
      reqs: {
        cost: 0,
        mass: 0,
      },
    },
    weaponry: {
      adfc: {
        rating: 0,
        reqs: {
          cost: 0,
          mass: 0,
        },
      },
      firecons: {
        stations: 0,
        reqs: {
          cost: 0,
          mass: 0,
        },
      },
      weapons: [
        {
          id: 1,
          specs: {
            type: "beam",
            weaponClass: 2,
            arcs: ["FS", "F", "FP"],
          },
          reqs: {
            mass: 2,
            cost: 6,
          },
        },
      ],
    },
  };
</script>
