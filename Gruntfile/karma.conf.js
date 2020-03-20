// Karma configuration
// Generated on Mon Jan 09 2017 11:17:40 GMT+0100 (W. Europe Standard Time)

module.exports = function(config) {
    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '',


        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['jasmine'],


        // list of files / patterns to load in the browser
        files: [
            'lib/responsiveIframe/DLG_responsiveiframe.js',
            'lib/angular/angular.js',
            'lib/angular/angular-mock.js',
            'lib/angular/angular-route.js',
            'lib/angular/angular-sanitize.min.js',
            'lib/angular/angular-local-storage.js',
            'lib/ui-grid/ui-grid.js',
            'lib/underscore/underscore.min.js',
           // 'dist/app.js',
            'app/app.js',
            'app/commonPages/utility/servicesConfiguration.js',
            'app/commonPages/**/*.js',
            'app/commonPages/**/**/*.js',
            'app/directives/**/*.js',
            'app/C4C/pages/**/**/*.js',
            'app/C503/pages/**/**/*.js',
            'test/**/*.js'
            //'test/eBarcodesController/*.js'
        ],


        // list of files to exclude
        exclude: [

        ],


        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
           // 'dist/app.js': 'coverage',
           // 'app/app.js': ['coverage'],
            'app/commonPages/**/*Controller.js': ['coverage'],
            'app/commonPages/**/**/*Controller.js': ['coverage'],
            'app/C4C/pages/**/*Controller.js': ['coverage'],
            'app/C4C/pages/**/**/*Controller.js': ['coverage'],
            'app/C503/pages/**/*Controller.js': ['coverage'],
            'app/C503/pages/**/**/*Controller.js': ['coverage']
        },


        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['progress', 'coverage'],
        coverageReporter : {
            type : 'lcov',
            dir : 'coverage/report-lcov',
            file : 'coverage.txt'
        },

        // web server port
        port: 9876,


        // enable / disable colors in the output (reporters and logs)
        colors: true,


        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,


        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['PhantomJS'],
        plugins : [
            'karma-coverage',
            'karma-chrome-launcher',
            'karma-phantomjs-launcher',
            'karma-ie-launcher',
            'karma-jasmine',
            'karma-jasmine-html-reporter'
        ],

        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: false,

        // Concurrency level
        // how many browser should be started simultaneous
        concurrency: Infinity
    })
}
