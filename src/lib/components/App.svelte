<main>

<Ribbon />
<Header on:changeTab={({ detail }) => activeTab = detail}/>

<div class:hide={activeTab !== 'editor'}>
    <ShipEdit />
</div>
<div class:hide={activeTab !== 'json'}>
    <JsonOutput />
</div>

</main>

<script>
    import { Modal, Card, Nav } from "svelte-chota";

    import Ribbon from "./Ribbon.svelte";
    import Header from "./Header.svelte";
    import ShipEdit from "./ShipEdit/index.svelte";
    import About from "./About.svelte";
    import JsonOutput from './Output/Json.svelte';

    let activeTab = 'editor';
    $: console.log(activeTab);
</script>

<style>
    .nav {
        width: var(--main-width);
        margin-left: auto;
        margin-right: auto;
    }
    .hide {
        display: none;
    }
    main {
        width: var(--main-width);
        margin-right: auto;
        margin-left: auto;
    }
</style>
