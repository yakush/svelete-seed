<script>
  import { Route } from "svelte-routing";
  import Home from "/pages/Home.svelte";
  import NotFound from "/pages/NotFound.svelte";

  export let url = "";
</script>

<div>
  <!-- <Route path="blog/:id" component={BlogPost} /> -->
  <!-- <Route path="blog" component={Blog} /> -->
  <!-- <Route path="about" component={About} /> -->
  <Route path="/" component={Home} />
  <Route path="" component={NotFound} />
</div>
