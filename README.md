# Germinate SPA

A project boilerplate for Single Page Application using [VueJS](https://vuejs.org) and asset compiling using [Laravel Mix](https://laravel-mix.com).

## Dependencies

Development dependencies
`npm install --save-dev laravel-mix sass-loader sass resolve-url-loader vue-loader vue-template-compiler browser-sync browser-sync-webpack-plugin`

Production dependencies
`npm install vue vue-router mitt`

### LiveReload

**If not using LiveReload Extension** you must add following script tag to your `index.html` page.

```
<script src="http://localhost:35729/livereload.js"></script>
```

### BrowserSync

Access URLs

- Local: [http://localhost:3000](http://localhost:3000)
- Local UI: [http://localhost:3001](http://localhost:3001)
- External: [http://192.168.0.22:3000](http://192.168.0.22:3000)
- External UI: [http://192.168.0.22:3001](http://192.168.0.22:3001)