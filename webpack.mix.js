// webpack.mix.js

let mix = require('laravel-mix');
mix.sass('src/app.scss', 'css');
// mix.sass('src/app.scss', 'dist').options({
//     processCssUrls: false
// });
mix.options({
    processCssUrls: false // questa opzione fa in modo da non modificare i percorsi delle immagini
});
