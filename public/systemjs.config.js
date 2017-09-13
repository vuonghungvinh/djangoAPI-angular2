/**
 * System configuration for Angular samples
 * Adjust as necessary for your application needs.
 */
(function (global) {
    System.config({
        defaultJSExtensions: true,
        //use typescript for compilation
        transpiler: 'typescript',
        //typescript compiler options
        typescriptOptions: {
            emitDecoratorMetadata: true
        },
        paths: {
            // 'npm:': 'https://unpkg.com/'
            'npm:': 'node_modules/'
        },
        // map tells the System loader where to look for things
        map: {
            // our app is within the app folder
            app: 'app',
            'moment': 'moment',
            'bootstrap': 'npm:bootstrap@3.3.7',
            'eonasdan-bootstrap-datetimepicker': 'npm:eonasdan-bootstrap-datetimepicker@v4.17.43',
            'ng2-eonasdan-datetimepicker': 'npm:ng2-eonasdan-datetimepicker/dist/datetimepicker.directive.js',
            // angular bundles
            '@angular/core': '@angular/core/bundles/core.umd.js',
            '@angular/common': '@angular/common/bundles/common.umd.js',
            '@angular/compiler': '@angular/compiler/bundles/compiler.umd.js',
            '@angular/platform-browser': '@angular/platform-browser/bundles/platform-browser.umd.js',
            '@angular/platform-browser-dynamic': '@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
            '@angular/http': '@angular/http/bundles/http.umd.js',
            '@angular/router': '@angular/router/bundles/router.umd.js',
            '@angular/forms': '@angular/forms/bundles/forms.umd.js',
            // other libraries
            'rxjs':                       'rxjs',
            'angular2-in-memory-web-api': 'angular2-in-memory-web-api',
            'typescript': 'npm:typescript@2.0.2/lib/typescript.js'
        },
        // packages tells the System loader how to load when no filename and/or no extension
        packages: {
            app: {
                main: './main.js',
                defaultExtension: 'js'
            },
            rxjs: {
                defaultExtension: 'js'
            },
            'angular2-in-memory-web-api': {
                main: './index.js',
                defaultExtension: 'js'
            },
            // momentJS 
            'moment': {
                main: './moment.js',
                defaultExtension: 'js'
            },
            'angular2-moment': {
                main: './index.js',
                defaultExtension: 'js'
            }
        }
    });
})(this);