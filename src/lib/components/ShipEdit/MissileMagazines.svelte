{#if magazines.length > 0}
  <ShipItem {...reqs}>
    <div>missile magazines</div>
    <div class="magazines">
      {#each magazines as magazine (magazine.id)}
        <Magazine {...magazine} unused={magazine.launchers.length === 0} />
      {/each}
    </div>
  </ShipItem>
{/if}

<script>
  import { getContext } from "svelte";

  import ShipItem from "$lib/components/ShipItem.svelte";
  import Magazine from "./MissileMagazines/Magazine.svelte";

  export let magazines = [];

  let reqs = { cost: 0, mass: 0 };

  const api = getContext("api");

  $: {
    reqs = { cost: 0, mass: 0 };
    magazines.forEach(({ reqs: r }) => {
      reqs.cost += r.cost;
      reqs.mass += r.mass;
    });
  }

  const handleMagazine = () => {};
</script>

<style>
  .magazines {
    display: flex;
    margin-left: 2em;
  }
</style>
