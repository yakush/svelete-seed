<script>
  import { Router, Link, Route } from "svelte-routing";

  import Routes from "./Routes.svelte";
  import NavLink from "/comps/NavLink.svelte";

  export let url = "";
</script>

<style>
  /* Style for "active" links; need to mark this :global because the router adds the class directly */
  :global(a.active) {
    color: crimson;
  }
</style>

<!-- -------------------------------------- -->
<Router {url}>

  <h1>My App</h1>

  <nav>
    <NavLink to="/">Home</NavLink>
    <NavLink to="about">About</NavLink>
    <NavLink to="blog">Blog</NavLink>
  </nav>

  <!-- router outlet: -->
  <Routes />

</Router>
