<script>
  import Router from "svelte-spa-router";
  import {
    link,
    push,
    pop,
    replace,
    location,
    querystring
  } from "svelte-spa-router";
  import active from "svelte-spa-router/active";

  import routes from "./routes";
</script>

<style>
  /* Style for "active" links; need to mark this :global because the router adds the class directly */
  :global(a.active) {
    color: crimson;
  }
  button {
    padding: 2px;
  }
</style>

<!-- -------------------------------------- -->
<h1>My App</h1>

<!-- Show the current path -->
<p>
  Current path: {$location}
  <br />
  Querystring: {$querystring}
</p>

<div>
  <a href="/" use:link use:active>Home</a>
  |
  <a href="/does/not/exist" use:link>Not found</a>
</div>

<!-- Navigate with buttons -->
<p class="navigation-buttons">
  <button on:click={() => pop()}>Go back</button>
  <button on:click={() => push('/any/something')}>Visit something</button>
  <button on:click={() => replace('/any/replaced')}>Replace page</button>
</p>

<!-- router outlet -->
<Router {routes} />
