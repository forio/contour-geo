module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-bumpup');
    grunt.loadNpmTasks('grunt-tagrelease');


    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        watch: {
            js: {
                files: ['src/scripts/**/*.js'],
                tasks: ['uglify:dev']
            }
        },

        releaseNotes: {
            files: [],
            options: {
                dest: 'dist/contour-geo-release-notes.txt'
            }
        },

        bumpup: {
            options: {
                updateProps: {
                    pkg: 'package.json'
                }
            },
            files: ['package.json']
        },

        tagrelease: '<%= pkg.version %>',

        ver: {
            files: ['src/scripts/version.js']
        },

        scripts: {
            libs: [
                'src/scripts/utils.js'
            ],
            geo: [
                'src/scripts/base.js',
                'src/scripts/geo.js',
                'src/scripts/map.js',
                'src/scripts/**/*.js'
            ]

        },
        concat: {
            all: {
                src: ['src/scripts/header.js', '<%= scripts.libs %>', '<%= scripts.geo %>', 'src/scripts/footer.js'],
                dest: 'dist/contour.geo.js'
            }
        },
        uglify: {
            options: {
                wrap: true,
                banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
                        '<%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            minify: {
                options: {
                    sourceMapIncludeSources: true,
                    sourceMap: true,
                    mangle: true,
                    compress: true,
                    preserveComments: 'none'
                },
                files: [{
                    src: ['src/scripts/header.js', '<%= scripts.libs %>', '<%= scripts.geo %>', 'src/scripts/footer.js'],
                    dest: 'dist/contour.geo.min.js'
                }]
            },

            concatenate: {
                options: {
                    sourceMapIncludeSources: true,
                    sourceMap: false,
                    mangle: false,
                    compress: false,
                    preserveComments: 'all',
                    beautify: true
                },

                files: [{
                    src: ['src/scripts/header.js', '<%= scripts.libs %>', '<%= scripts.geo %>', 'src/scripts/footer.js'],
                    dest: 'dist/contour.geo.js'
                }]

            },

            dev: {
                options: {
                    sourceMapIncludeSources: true,
                    sourceMap: true,
                    mangle: false,
                    compress: false,
                    preserveComments: 'all',
                    // beautify: true
                },

                files: [{
                    src: ['src/scripts/header.js', '<%= scripts.libs %>', '<%= scripts.geo %>', 'src/scripts/footer.js'],
                    dest: 'dist/contour.geo.min.js'
                }]
            }
        }
    });

    // Default task.
    grunt.registerTask('default', ['uglify:dev', 'uglify:concatenate', 'watch']);
    grunt.registerTask('production', ['uglify:minify', 'uglify:concatenate', 'releaseNotes']);
    grunt.registerTask('relase', function (type) {
        type = type ? type : 'patch';
        ['bumpup:' + type, 'ver', 'uglify:minify', 'uglify:concatenate', 'tagrelease'].forEach(function (task) {
            grunt.task.run(task);
        });
    });


    grunt.registerMultiTask('releaseNotes', 'Generate a release notes file with changes in git log since last tag', function () {
        var options = this.options({
            dest: 'dist/release-notes.txt'
        });

        var cmd = 'git log --pretty="format:  * %s"  `git describe --tags --abbrev=0`..HEAD > ' + options.dest;
        grunt.log.verbose.writeln('executing', cmd);
        var log = require('shelljs').exec(cmd).output;
        grunt.file.write(options.dest, log);
    });

    grunt.registerMultiTask('ver', 'Update version file with what\'s in package.json', function () {
        var pkg = require('./package.json');
        this.data.forEach(function (f) {
            console.log('Updating ' + f + ' to version ' + pkg.version);
            grunt.file.write(f, "Contour.geo.version = '" + pkg.version + "';");
        });
    });

};
