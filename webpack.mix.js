// webpack.mix.js

let mix = require('laravel-mix');
mix.sass('src/app.scss', 'css');
mix.options({
    // questa opzione fa in modo da non modificare i percorsi delle immagini
    processCssUrls: false
});
