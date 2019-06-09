import Home from '/pages/Home.svelte'
import NotFound from '/pages/NotFound.svelte'

export default {

    // Exact path
    '/': Home,
    // '/test/': Test,
    // '/any/*': Any,
    // '/any': Any,
    // // Using named parameters, with last being optional
    // '/hello/:first/:last?': Name,
    // // Wildcard parameter
    // '/wild': Wild,
    // '/wild/*': Wild,

    // Catch-all, must be last
    '*': NotFound,
}