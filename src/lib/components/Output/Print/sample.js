export default {
  "identification": {
    "shipType": "Scout",
    "shipClass": "Blah",
    "isCarrier": false,
    "mass": 10
  },
  "propulsion": {
    "drive": {
      "reqs": {
        "cost": 2,
        "mass": 1
      },
      "rating": 3,
      "advanced": true
    },
    "ftl": {
      "reqs": {
        "cost": 0,
        "mass": 0
      },
      "type": "none"
    }
  },
  "structure": {
    "hull": {
      "reqs": {
        "cost": 2,
        "mass": 1
      },
      "rating": 10,
      "min": 1,
      "max": 10
    },
    "screens": {
      "reqs": {
        "cost": 0,
        "mass": 0
      },
      "standard": 3,
      "advanced": 2
    },
    "cargo": {
      "reqs": {
        "cost": 0,
        "mass": 0
      },
      "space": 0
    },
    "streamlining": {
      "reqs": {
        "cost": 0,
        "mass": 0
      },
      "type": "none"
    },
    "armor": {
      "layers": [],
      "reqs": {
        "mass": 0,
        "cost": 0
      }
    }
  },
  "carrier": {
    "reqs": {
      "cost": 0,
      "mass": 0
    },
    "bays": 0,
    "squadrons": []
  },
  "weaponry": {
    "weapons": [
      {
        "id": 1,
        "type": "beam",
        "reqs": {
          "mass": 1,
          "cost": 3
        },
        "weaponClass": 1
      }
    ],
    "firecons": {
      "stations": 1,
      "reqs": {
        "cost": 4,
        "mass": 1
      }
    },
    "adfc": {
      "rating": 1,
      "reqs": {
        "cost": 8,
        "mass": 2
      }
    }
  },
  "reqs": {
    "cost": 19,
    "mass": 10,
    "usedMass": 6
  }
}
