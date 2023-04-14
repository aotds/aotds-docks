<Layout>
  <slot />
</Layout>

<script>
  import { setContext } from "svelte";

  import { createApi } from "$lib/store/api.ts";
  import Layout from "$lib/components/MainLayout.svelte";

  setContext("api", createApi());
</script>
