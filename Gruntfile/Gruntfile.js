module.exports = function(grunt) {
    // Project configuration.
    grunt.initConfig({
        //Read the package.json (optional)
        pkg: grunt.file.readJSON('package.json'),

        watch: {
            files:['app/app.js','app/applicationRoutes.js','app/directives/**/*.js','app/commonPages/**/*.js','app/commonPages/**/**/*.js',
                'app/C4C/pages/**/**/*.js','app/C4C/directives/**/*.js',
                'app/C503/pages/**/**/*.js','app/C503/directives/**/*.js'],
            tasks: ['concat', 'uglify']
        },
        // Metadata.
        concat: {
            options:{
                seperator: ";",
                stripBanners: true,
                banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
                '<%= grunt.template.today("yyyy-mm-dd") %> */'
            },
            dist: {
                src: ['app/app.js','app/applicationRoutes.js','app/directives/**/*.js','app/commonPages/**/*.js','app/commonPages/**/**/*.js',
                    'app/C4C/pages/**/**/*.js','app/C4C/directives/**/*.js',
                    'app/C503/pages/**/**/*.js','app/C503/directives/**/*.js',
                    '!app/commonPages/utility/servicesConfiguration.js'],
                dest: 'dist/app.js'
            }
        },
        uglify: {
            options:{
                mangle: false,
                compress:{
                    global_defs:{
                        "DEBUG": false
                    },
                    dead_code: true,
                    unused: true,
                    drop_console: true
                }
            },
            build: {
                src: ['dist/app.js'],
                dest:'dist/app.min.js'
            }
        },
        karma: {
            unit: {
                configFile: 'karma.conf.js',
                singleRun: true,
                logLevel: 'ERROR'
            }
        },

        connect: {
            server: {
                options: {
                    livereload: true,
                    port: 9009
                }
            }
        }
    });


    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-serve');
    grunt.loadNpmTasks('grunt-karma');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // Default task
    grunt.registerTask('default', ['concat', 'uglify']);
    // Start web server uncomment when you want the test cases to be executed
    grunt.registerTask('serve', [
        'concat', 'uglify','connect:server',
        'watch'
    ]);
    grunt.registerTask('test', [
        'karma'
    ]);
};