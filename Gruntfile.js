'use strict';
module.exports = function(grunt) {

	grunt.initConfig({

		watch: {
			options: {
				livereload: true,
			},
			js: {
				files: [
					'Gruntfile.js',
					'assets/js/*.coffee',
				],
				tasks: [ 'coffee', 'uglify' ]
			},
			css: {
				files: [
					'assets/css/*.scss'
				],
				tasks: [ 'sass' ]
			}
		},

		uglify: {
			dist: {
				options: {
					sourceMap: true
				},
				files: {
					'assets/js/app.min.js': [
						'assets/js/app.js',
					],
				}
			}
		},

		coffee: {
			dist: {
				options: {
					sourceMap: true,
				},
				files: {
					'assets/js/app.js': [
						'assets/js/app.coffee'
					],
				}
			}
		},

		sass: {
			dist: {
				files: {
					'assets/css/app.css': [
						'assets/css/app.scss'
					]
				}
			}
		}

	});

	grunt.loadNpmTasks( 'grunt-contrib-watch' );
	grunt.loadNpmTasks( 'grunt-contrib-coffee' );
	grunt.loadNpmTasks( 'grunt-contrib-uglify' );
	grunt.loadNpmTasks( 'grunt-contrib-sass' );

	grunt.registerTask('default', ['watch']);

	grunt.registerTask('build', ['uglify', 'coffee', 'sass']);
};