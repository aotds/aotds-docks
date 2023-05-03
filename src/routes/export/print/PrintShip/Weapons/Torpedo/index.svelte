<div class="torpedo">
  <Arcs selected={arcs} size={40}>
    <g transform="scale(0.12) translate(-315,-100)">
      <path
        d="M480,162.8c-57.2,0-103.5,46.3-103.5,103.5S422.8,369.8,480,369.8c57.2,0,103.5-46.3,103.5-103.5S537.2,162.8,480,162.8z
		 M534.3,320.6l-38.2-22.8h-32.3l-38.2,22.8l22.8-38.2v-32.3L425.7,212l38.2,22.8h32.3l38.2-22.8l-22.8,38.2v32.3L534.3,320.6z"
      />
    </g>
  </Arcs>
  <div class="weaponClass">2</div>
</div>

<script>
  import Arcs from "$lib/components/ShipEdit/Weaponry/Weapon/Arcs.svelte";
  export let weaponClass = 1;
  export let arcs = [];
</script>

<style>
  .torpedo {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .weaponClass {
    text-align: center;
    background-color: black;
    color: white;
    border-radius: 50%;
    width: 20px;
  }
  div {
    margin: 0px 0.5rem;
  }
  div :global(path.arc) {
    fill: none;
  }
  div :global(path.active) {
    fill: black;
  }
  div :global(path.active:hover) {
    fill: black;
  }
  text {
    text-anchor: middle;
    dominant-baseline: central;
    font-size: var(--font-scale-10);
  }
</style>
