<Ribbon />
<Header />

<ShipEdit />

<script>
    import { Modal, Card, Nav } from "svelte-chota";

    import Ribbon from "./Ribbon.svelte";
    import Header from "./Header.svelte";
    import ShipEdit from "./ShipEdit/index.svelte";
    import About from "./About.svelte";
</script>

<style>
    .nav {
        width: var(--main-width);
        margin-left: auto;
        margin-right: auto;
    }
</style>
