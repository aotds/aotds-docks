<Hst.Story>
  <Weaponry {weapons} />
</Hst.Story>

<script>
  export let Hst;
  import Weaponry from "./Weaponry.svelte";
  import u from "@yanick/updeep-remeda";
  import { weaponTypes } from "$lib/store/ship/weaponry/rules";
  import Changelog from "../Changelog.svelte";

  const weapons = [
    weaponTypes.find(u.matches({ type: "beam" })).initial,
    weaponTypes.find(u.matches({ type: "submunition" })).initial,
  ].map((specs, id) => ({ specs, id }));
  console.log(weapons);
</script>
