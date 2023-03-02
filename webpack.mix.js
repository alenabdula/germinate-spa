const mix = require('laravel-mix');
const path = require("path");
const LiveReloadPlugin = require('webpack-livereload-plugin');

//
//  Laravel Mix
//  https://laravel-mix.com/docs/6.0/api
//
mix.disableNotifications()
    //
    //  Run code before Webpack compiles
    //
    .before(() => {
        console.log('Run code before Webpack compiles')
    })

    //
    //  Custom webpack configurations
    //  https://laravel-mix.com/docs/6.0/quick-webpack-configuration
    //
    .webpackConfig({
        plugins: [
            new LiveReloadPlugin({
                hostname: 'germinate-spa.test', // Local vagrant machine
                delay: 0,                       // delay for longer builds
            })
        ],
        resolve: {
            alias: {
                //  Alias for importing Sass variables, functions and mixins,
                //  @import '~GlobalSass';
                'GlobalSass': path.resolve('resources/assets/sass/bootstrap.scss'),
            },
        },
    })

    //
    //  Sets public path
    //
    .setPublicPath('public')

    //
    //  JavaScript
    //
    .js('resources/assets/js/app.js', 'public/js')
        .vue()

    //
    //  SASS
    //
    .sass('resources/assets/sass/app.scss', 'public/css')
    .sass('resources/assets/sass/shared.scss', 'public/css')

    //
    //  Version Control for cache busting
    //
    .version()

    //
    //  Source Maps
    //
    .sourceMaps()

    //
    //  BrowserSync
    //  Allows for external viewing ex. mobile devices
    //
    .browserSync({
        proxy: false,
        server: {
            baseDir: "public",
            index: "index.html"
        },
        files: [
            // './public/**/*.*'
        ]
    })

    //
    //  Run code after Webpack compiles
    //  TO-DO
    //  This runs 3 times in the console, not sure why!?
    //
    .after(stats => {
        console.log('Run code after Webpack compiles')
        // console.log(stats.toJson("minimal"))
    })

;
