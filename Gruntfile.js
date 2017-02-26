module.exports = function(grunt) {
    grunt.initConfig({
        less: {
            style: {
                files: {
                    "dist/css/style.css": "src/less/style.less"
                }
            }
        },
        cssmin: {
            target: {
                files: {
                    "dist/css/style.min.css": "dist/css/style.css",
                    "dist/css/normalize.css": "node_modules/normalize.css/normalize.css"
                }
            }
        },
        sync: {
            copy: {
                files: [
                    { cwd: 'src', src: '*.html', dest: 'dist/' },
                    { cwd: 'src', src: 'img/*', dest: 'dist/' },
                    { cwd: 'src', src: 'js/**', dest: 'dist/' }
                ]
            }
        },
        watch: {
            styles: {
                files: ['src/less/*.less'], tasks: ['less', 'cssmin']
            },
            sync: {
                files: ['src/**'], tasks: ['sync:copy']
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-sync');
    grunt.registerTask('default', ['less', 'cssmin', 'sync']);

};