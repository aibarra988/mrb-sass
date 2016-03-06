module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        requirejs: {
            mainJS: {
                options: {
                    baseUrl: "public/js/",
                    paths: {
                        "app": "app/config/Init"
                    },
                    wrap: true,
                    name: "libs/almond",
                    preserveLicenseComments: false,
                    optimize: "uglify",
                    mainConfigFile: "public/js/app/config/Init.js",
                    out: "public/js/app/config/Init.min.js"
                }
            }
        },
        jshint: {
            files: ['Gruntfile.js', 'public/js/app/**/*.js', '!public/js/app/**/*min.js'],
            options: {
                globals: {
                    jQuery: true,
                    console: false,
                    module: true,
                    document: true
                }
            }
        }, 
        sass: {
            dist: {
                files: {
                    "public/css/app.css": "public/sass/app.scss"
                }
            }
        },
        watch: {
            sass: {
                files: "**/*.scss",
                tasks: ['sass']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('test', ['jshint']);
    grunt.registerTask('build', ['requirejs:mainJS','sass']);
    grunt.registerTask('default', ['test', 'build', 'watch']);

};