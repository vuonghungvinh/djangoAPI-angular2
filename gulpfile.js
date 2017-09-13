const elixir = require('laravel-elixir');

require('laravel-elixir-vue');
require('elixir-typescript');


/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(mix => {
    mix.sass('app.scss')
    .webpack('app.js')
    .copy('node_modules/@angular', 'public/@angular')
    .copy('node_modules/anular2-in-memory-web-api', 'public/anular2-in-memory-web-api')
    .copy('node_modules/core-js', 'public/core-js')
    .copy('node_modules/reflect-metadata', 'public/reflect-metadata')
    .copy('node_modules/systemjs', 'public/systemjs')
    .copy('node_modules/rxjs', 'public/rxjs')
    .copy('node_modules/zone.js', 'public/zone.js')
    .copy('node_modules/ng2-toastr', 'public/ng2-toastr')
    .copy('node_modules/jquery', 'public/jquery')
    .copy('node_modules/moment', 'public/moment')
    .copy('node_modules/ng2-datepicker', 'public/ng2-datepicker')
    .copy('node_modules/ng2-eonasdan-datetimepicker', 'public/ng2-eonasdan-datetimepicker')

    .typescript(
        [
            'app.component.ts',
            'app.module.ts',
            'main.ts',
            '*.ts',
            '**/*.ts'
        ],
        'public/app',
        {
            "target": "es5",
            "module": "system",
            "moduleResolution": "node",
            "sourceMap": true,
            "emitDecoratorMetadata": true,
            "experimentalDecorators": true,
            "removeComments": true,
            "noImplicitAny": false
        }
    );
})
;
