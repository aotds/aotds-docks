<div class="main-systems">
  <Ftl type={ftl.type} />

  <Drive rating={drive.rating} />

  <img
    class="internal"
    src="/icons/internal-systems.svg"
    alt="internal systems"
  />
</div>

<script>
  import Ftl from "./Ftl.svelte";
  import Drive from "./Drive.svelte";

  export let ftl = {};
  export let drive = {};

  // TODO advanced drive
</script>

<style>
  .main-systems {
    display: flex;
    align-items: center;
    gap: 1em;
    justify-content: space-evenly;
    margin-top: 1em;
  }
  img {
    height: 2em;
  }
</style>
