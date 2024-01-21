const mix = require('laravel-mix');

mix.js('resources/js/explore/pagination.js', 'public/js');

mix.js('resources/js/app.js', 'public/js')
   .autoload({
       jquery: ['$', 'window.jQuery', 'jQuery'],
   }).sourceMaps(false);
mix.copy('node_modules/bootstrap/dist/css/bootstrap.min.css', 'public/css/bootstrap.min.css');
mix.copy('node_modules/bootstrap/dist/js/bootstrap.bundle.min.js', 'public/js/bootstrap.bundle.min.js');

mix.copy('node_modules/bootstrap/dist/js/bootstrap.bundle.min.js.map', 'public/js/bootstrap.bundle.min.js.map');
mix.copy('node_modules/bootstrap/dist/css/bootstrap.min.css.map', 'public/css/bootstrap.min.css.map');
