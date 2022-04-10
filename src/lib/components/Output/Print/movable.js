import VanillaMoveable, { PROPERTIES, EVENTS } from "moveable";
import { camelize, isUndefined } from "@daybrush/utils";

function createMoveable(node, options) {
  let translate = [0, 0];

  let ship = options.ship;
  let system = options.system;
  delete options.ship;
  delete options.system;

  if (Array.isArray(system)) {
    system = { system: system[0], systemId: system[1] };
  } else {
    system = { system };
  }

  options = {
    originDraggable: true,
    originRelative: true,
    draggable: true,
    throttleDrag: 0,
    zoom: 1,
    origin: false,
    onDrag(e) {
      translate = e.beforeTranslate;
      node.dispatchEvent(new CustomEvent("translate", { detail: translate }));
      ship.dispatch.setUITransform({ ...system, translate });
    },
    target: node,
    ...options,
  };

  const moveable = new VanillaMoveable(document.body, options);

  EVENTS.forEach((name) => {
    const onName = camelize(`on ${name}`);
    moveable.on(name, (e) => {
      const result = options[onName] && options[onName](e);
      const result2 = node.dispatchEvent(new CustomEvent(name, { detail: e }));

      return !isUndefined(result)
        ? result
        : !isUndefined(result2)
        ? result2
        : undefined;
    });
  });

  return moveable;
}

export function movable(node, options) {
  let moveable = options.disabled ? undefined : createMoveable(options);

  const destroy = () => {
    if (!moveable) return;
    moveable.destroy();
    moveable = undefined;
  };

  const update = async (params) => {
    if (params.disabled) {
      destroy();
    } else {
      if (!moveable) {
        moveable = createMoveable(node, params);
      }
    }
  };

  return {
    destroy,
    update,
  };
}
