export type Streamlining = "none" | "partial" | "full";

export function calcStreamliningReqs(type: Streamlining, shipMass: number) {
  const mass = Math.ceil(
    (shipMass * (type === "none" ? 0 : type === "partial" ? 5 : 10)) / 100
  );

  return { mass, cost: 2 * mass };
}
