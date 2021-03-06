module.exports = function(grunt) {

	grunt.initConfig({

		// Import package manifest
		pkg: grunt.file.readJSON("package.json"),

		// Banner definitions
		meta: {
			banner: "/*\n" +
			" *  <%= pkg.title || pkg.name %> - v<%= pkg.version %>\n" +
			" *  <%= pkg.description %>\n" +
			" *  <%= pkg.homepage %>\n" +
			" *\n" +
			" *  Made by <%= pkg.author.name %>\n" +
			" *  Under <%= pkg.license %> License\n" +
			" */\n"
		},

		// Concat definitions
		concat: {
			options: {
				banner: "<%= meta.banner %>"
			},
			dist: {
				src: ["src/jquery.css3sidebar.js"],
				dest: "dist/jquery.css3sidebar.js"
			}
		},

		// Lint definitions
		jshint: {
			files: ["src/jquery.css3sidebar.js", "test/**/*"],
			options: {
				jshintrc: ".jshintrc"
			}
		},

		// Minify definitions
		uglify: {
			my_target: {
				src: ["dist/jquery.css3sidebar.js"],
				dest: "dist/jquery.css3sidebar.min.js"
			},
			options: {
				banner: "<%= meta.banner %>"
			}
		},

		// CoffeeScript compilation
		coffee: {
			compile: {
				files: {
					"dist/jquery.css3sidebar.js": "src/jquery.css3sidebar.coffee"
				}
			}
		},
		sass: {
			dist: {
				files: {
					"css/css3sidebar.css": "src/sass/css3sidebar.scss",
				}
			}
		},
		// karma test runner
		karma: {
			unit: {
				configFile: "karma.conf.js",
				background: true,
				singleRun: false,
				browsers: ["Chrome"]
			},
		  //continuous integration mode: run tests once in PhantomJS browser.
		  travis: {
		  	configFile: "karma.conf.js",
		  	singleRun: true,
		  	browsers: ["PhantomJS"]
		  },
		},



		// watch for changes to source
		// Better than calling grunt a million times
		// (call 'grunt watch')
		watch: {
			files: ["src/*/*", "test/**/*"],
			tasks: ["default"]
		}

	});

	grunt.loadNpmTasks("grunt-contrib-concat");
	grunt.loadNpmTasks("grunt-contrib-jshint");
	grunt.loadNpmTasks("grunt-contrib-uglify");
	grunt.loadNpmTasks("grunt-contrib-coffee");
	grunt.loadNpmTasks("grunt-contrib-watch");
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-sass');

	grunt.registerTask("travis", ["jshint", "karma:travis"]);
	grunt.registerTask("build", ["concat", "uglify"]);
	grunt.registerTask("default", ["sass","jshint", "build"]);
};
