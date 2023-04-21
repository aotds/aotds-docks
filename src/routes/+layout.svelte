<Layout>
  <slot />
</Layout>

<script>
  import { setContext } from "svelte";

  import { createApi } from "$lib/store/api.js";
  import uids from "$lib/store/uids.js";
  import Layout from "$lib/components/MainLayout.svelte";

  setContext("api", createApi());
  setContext("genUid", uids());
</script>
