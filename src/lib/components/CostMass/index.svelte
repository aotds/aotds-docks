<div class="mass">{mass}<img src="{base}/mass.svg" alt="mass" /></div>
<div class="cost">{cost}</div>

<script>
  import { base } from "$app/paths";
  export let mass;
  export let cost;
</script>

<style>
  .cost {
    grid-column: 3;
  }
  .mass {
    grid-column: 2;
  }
  img {
    width: 0.75em;
  }
  .cost:after {
    content: "\00A4";
    margin-left: 0.5em;
  }
  .mass img {
    width: 0.75em;
    display: inline-block;
    margin-left: 0.5em;
  }
</style>
