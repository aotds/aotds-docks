<div>
  <Firecons {isMovable} {...firecons} />

  <Screens {isMovable} {...screens} />
</div>

<script>
  import Firecons from "./Firecons/index.svelte";
  import Screens from "./Screens/index.svelte";

  export let firecons = 0;
  export let screens = {};
  export let isMovable = false;
</script>

<style>
  div {
    text-align: center;
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  div > :global(*) {
    margin-bottom: 1em;
  }
</style>
