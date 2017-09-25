module.exports = function(grunt){
    grunt.initConfig({
        pkg: grunt.file.readJSON('bower.json'),
        concat:{
            dist:{
                src:['src/*.js', 'node_modules/kinetic/kinetic.min.js', 'node_modules/jquery.scrollto/jquery.scrollTo.min.js'],
                dest: '<%= pkg.name %>.js'
            }
        },
        uglify: {
            main: {
                files: {
                    '<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>']
                }
            }
        },
        jshint: {
            files: ['Gruntfile.js', 'src/*.js'],
            options: {
                "eqnull": true,
                "globals": {
                    jQuery: true,
                    console: true,
                    module: true
                }
            }
        },
        cssmin: {
            combine: {
                files: {
                    'enjoyhint.css': ['src/jquery.enjoyhint.css']
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    grunt.registerTask("default", ["concat", "uglify", "cssmin"])

};
