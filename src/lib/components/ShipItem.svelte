<div class="ship-item">
  <div><slot /></div>

  <div class="reqs">
    <div class="mass" bind:this={mass_el}>
      {mass} <i>Weight</i>
    </div>
    <div class="cost" bind:this={cost_el}>
      {cost}
      <i>Paid</i>
    </div>
  </div>
</div>

<script>
  import { base } from "$app/paths";
  import { tick } from "svelte";

  export let mass;
  export let cost;

  let mass_el;
  let cost_el;

  const update_el = async (el) => {
    if (!el) return;
    el.classList.remove("updated");
    void el.offsetWidth;
    el.classList.add("updated");
  };

  $: update_el(mass_el, mass);
  $: update_el(cost_el, cost);
</script>

<style>
  div {
    margin-bottom: 1em;
  }

  .cost,
  .mass {
    width: 4em;
    padding: 0px 0.5em;
    text-align: right;
  }

  .ship-item {
    display: flex;
  }

  .ship-item :global(> *) {
    flex: 1;
  }

  img {
    width: 0.75em;
  }
  .mass img {
    width: 0.75em;
    display: inline-block;
    margin-left: 0.5em;
  }

  :global(.updated) {
    animation-name: update;
    animation-duration: 1.5s;
    animation-fill-mode: forwards;
  }

  @keyframes update {
    0% {
      color: inherit;
      font-weight: inherit;
    }
    20% {
      color: red;
      font-weight: bold;
    }
    80% {
      color: red;
      font-weight: bold;
    }
    100% {
      color: inherit;
      font-weight: inherit;
    }
  }

  .ship-item {
    display: flex;
  }
  .reqs {
    flex: 0;
    width: 10em;
    display: flex;
  }
</style>
