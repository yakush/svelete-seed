# my svelte seed 

This is my project template for [Svelte]  
get it using

```bash
npx degit https://github.com/yakush/svelete-seed my-svelte-app
cd my-svelte-app
```
## features:
- router (svelte-router)
- separate static folder for index and global css (will be copied to build folder)
- build : generate gzip files in a separate folder
- rootImport (i.e. import from "/some/file")
- svelte-preprocess (can separate template code and css files)
- typescript
- .env support : content of the .env file will be available in the js world using:
 ```js
 process.env.your-var-name
 ```
  - development priority: .env.development.local -> env.development -> .env
  - production priority: .env.production.local -> env.production -> .env

## Get started

Install the dependencies...

```bash
cd svelte-app
npm install
```

...then start [Rollup](https://rollupjs.org):

```bash
npm run dev
```

Navigate to [localhost:5000](http://localhost:5000). You should see your app running. Edit a component file in `src`, save it, and reload the page to see your changes.


## Deploying to the web

### With [now](https://zeit.co/now)

Install `now` if you haven't already:

```bash
npm install -g now
```

Then, from within your project folder:

```bash
now
```

As an alternative, use the [Now desktop client](https://zeit.co/download) and simply drag the unzipped project folder to the taskbar icon.

### With [surge](https://surge.sh/)

Install `surge` if you haven't already:

```bash
npm install -g surge
```

Then, from within your project folder:

```bash
npm run build
surge public
```
