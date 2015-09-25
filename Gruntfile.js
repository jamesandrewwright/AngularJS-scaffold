// Generated on 2015-09-24 using generator-angular 0.11.1
"use strict";

// # Globbing
// for performance reasons we"re only matching one level down:
// "test/spec/{,*/}*.js"
// use this if you want to recursively match all subfolders:
// "test/spec/**/*.js"

module.exports = function (grunt) {
  grunt.loadNpmTasks("grunt-protractor-runner");
  grunt.loadNpmTasks("grunt-ng-annotate");
  // Load grunt tasks automatically
  require("load-grunt-tasks")(grunt);

  // Time how long tasks take. Can help when optimizing build times
  require("time-grunt")(grunt);

  // Configurable paths for the application
  var appConfig = {
    app: require("./bower.json").appPath || "app",
    dist: "dist"
  };

  // Define the configuration for all the tasks
  grunt.initConfig({

    // Project settings
    yeoman: appConfig,

    // Watches files for changes and runs tasks based on the changed files
    watch: {
      bower: {
        files: ["bower.json"],
        tasks: ["wiredep"]
      },
      js: {
        files: [
          "<%= yeoman.app %>/**/!(*.spec).js"
        ],
        tasks: [
          "newer:jshint:src",
          "newer:jscs",
          "newer:concat:appJS",
          "ngAnnotate"
        ],
        options: {
          livereload: "<%= connect.options.livereload %>"
        }
      },
      jsTest: {
        files: [
          "test/spec/{,*/}*.js",
          "<%= yeoman.app %>/**/*.spec.js"
        ],
        tasks: [
          "newer:jshint:test",
          "newer:jscs",
          "karma"
        ]
      },
      compass: {
        files: ["<%= yeoman.app %>/styles/{,*/}*.{scss,sass}"],
        tasks: ["compass:server", "autoprefixer"]
      },
      gruntfile: {
        files: ["Gruntfile.js"],
        tasks: [
          "newer:jshint:test",
          "newer:jscs"
        ]
      },
      livereload: {
        options: {
          livereload: "<%= connect.options.livereload %>"
        },
        files: [
          "<%= yeoman.app %>/{,*/}*.html",
          ".tmp/styles/{,*/}*.css",
          ".tmp/scripts/{,*/}*.js",
          "<%= yeoman.app %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}"
        ]
      }
    },

    // The actual grunt server settings
    connect: {
      options: {
        port: 9000,
        // Change this to "0.0.0.0" to access the server from outside.
        hostname: "localhost",
        livereload: 35729
      },
      livereload: {
        options: {
          open: true,
          middleware: function (connect) {
            return [
              connect.static(".tmp"),
              connect().use(
                "/bower_components",
                connect.static("./bower_components")
              ),
              connect().use(
                "/app/styles",
                connect.static("./app/styles")
              ),
              connect().use(
                "/app/scripts",
                connect.static("./app/js")
              ),
              connect.static(appConfig.app)
            ];
          }
        }
      },
      test: {
        options: {
          port: 9001,
          middleware: function (connect) {
            return [
              connect.static(".tmp"),
              connect.static("test"),
              connect().use(
                "/bower_components",
                connect.static("./bower_components")
              ),
              connect.static(appConfig.app)
            ];
          }
        }
      },
      dist: {
        options: {
          open: true,
          base: "<%= yeoman.dist %>"
        }
      }
    },

    // Make sure code styles are up to par and there are no obvious mistakes
    jshint: {
      src: {
        src: [
          "app/**/!(*.spec).js"
        ],
        options: {
          jshintrc: "node_modules/jw-code-style/jshint/.src.jshintrc"
        }
      },
      test: {
        src: [
          "app/**/*.spec.js",
          "test/**/*.js"
        ],
        options: {
          jshintrc: "node_modules/jw-code-style/jshint/.test.jshintrc"
        }
      },
      build: {
        src: ["Gruntfile.js"],
        options: {
          jshintrc: "node_modules/jw-code-style/jshint/.build.jshintrc"
        }
      }
    },
    jscs: {
      src: [
        "{app,test,grunt}/**/*.js",
        "Gruntfile.js"
      ],
      options: {
        config: "node_modules/jw-code-style/jscs/.jscs.json"
      }
    },

    protractor: {
      options: {
        configFile: "test/e2e.conf.js", // Default config file
        keepAlive: true, // If false, the grunt process stops when the test fails.
        noColor: false, // If true, protractor will not use colors in its output.
        args: {
          // Arguments passed to the command
        }
      },
      all: {   // Grunt requires at least one target to run so you can simply put "all: {}" here too.
        options: {
          configFile: "test/e2e.conf.js", // Target-specific config file
          args: {
            capabilities: {
              browserName: grunt.option("e2e-browser") !== undefined ? grunt.option("e2e-browser") : "chrome"
            }
          } // Target-specific arguments
        }
      }
    },

    // Empties folders to start fresh
    clean: {
      dist: {
        files: [{
          dot: true,
          src: [
            "<%= yeoman.dist %>/{,*/}*",
            "!<%= yeoman.dist %>/.git{,*/}*"
          ]
        }]
      },
      server: ".tmp"
    },

    // Add vendor prefixed styles
    autoprefixer: {
      options: {
        browsers: ["last 1 version"]
      },
      server: {
        options: {
          map: true
        },
        files: [{
          expand: true,
          cwd: ".tmp/styles/",
          src: "{,*/}*.css",
          dest: ".tmp/styles/"
        }]
      },
      dist: {
        files: [{
          expand: true,
          cwd: ".tmp/styles/",
          src: "{,*/}*.css",
          dest: ".tmp/styles/"
        }]
      }
    },

    // Automatically inject Bower components into the app
    wiredep: {
      app: {
        src: ["<%= yeoman.app %>/index.html"],
        ignorePath:  /\.\.\//
      },
      test: {
        devDependencies: true,
        src: "<%= karma.unit.configFile %>",
        ignorePath:  /\.\.\//,
        fileTypes:{
          js: {
            block: /(([\s\t]*)\/{2}\s*?bower:\s*?(\S*))(\n|\r|.)*?(\/{2}\s*endbower)/gi,
              detect: {
                js: /"(.*\.js)"/gi
              },
              replace: {
                js: "\"{{filePath}}\","
              }
            }
          }
      },
      sass: {
        src: ["<%= yeoman.app %>/styles/{,*/}*.{scss,sass}"],
        ignorePath: /(\.\.\/){1,2}bower_components\//
      }
    },

    // Compiles Sass to CSS and generates necessary files if requested
    compass: {
      options: {
        sassDir: "<%= yeoman.app %>/styles",
        cssDir: ".tmp/styles",
        generatedImagesDir: ".tmp/images/generated",
        imagesDir: "<%= yeoman.app %>/images",
        javascriptsDir: "<%= yeoman.app %>/scripts",
        fontsDir: "<%= yeoman.app %>/styles/fonts",
        importPath: "./bower_components",
        httpImagesPath: "/images",
        httpGeneratedImagesPath: "/images/generated",
        httpFontsPath: "/styles/fonts",
        relativeAssets: false,
        assetCacheBuster: false,
        raw: "Sass::Script::Number.precision = 10\n"
      },
      dist: {
        options: {
          generatedImagesDir: "<%= yeoman.dist %>/images/generated"
        }
      },
      server: {
        options: {
          sourcemap: true
        }
      }
    },

    // Renames files for browser caching purposes
    filerev: {
      dist: {
        src: [
          "<%= yeoman.dist %>/scripts/{,*/}*.js",
          "<%= yeoman.dist %>/styles/{,*/}*.css",
          "<%= yeoman.dist %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}",
          "<%= yeoman.dist %>/styles/fonts/*"
        ]
      }
    },

    // Reads HTML for usemin blocks to enable smart builds that automatically
    // concat, minify and revision files. Creates configurations in memory so
    // additional tasks can operate on them
    useminPrepare: {
      html: "<%= yeoman.app %>/index.html",
      options: {
        dest: "<%= yeoman.dist %>",
        flow: {
          html: {
            steps: {
              js: ["concat", "uglifyjs"],
              css: ["cssmin"]
            },
            post: {}
          }
        }
      }
    },

    // Performs rewrites based on filerev and the useminPrepare configuration
    usemin: {
      html: ["<%= yeoman.dist %>/{,*/}*.html"],
      css: ["<%= yeoman.dist %>/styles/{,*/}*.css"],
      options: {
        assetsDirs: [
          "<%= yeoman.dist %>",
          "<%= yeoman.dist %>/images",
          "<%= yeoman.dist %>/styles"
        ]
      }
    },

    // The following *-min tasks will produce minified files in the dist folder
    // By default, your `index.html`"s <!-- Usemin block --> will take care of
    // minification. These next options are pre-configured if you do not wish
    // to use the Usemin blocks.
    cssmin: {
       dist: {
         files: {
           "<%= yeoman.dist %>/styles/main.css": [
             ".tmp/styles/{,*/}*.css"
           ]
         }
       }
    },
    uglify: {
       dist: {
         files: {
           "<%= yeoman.dist %>/scripts/site.js": [
             ".tmp/scripts/site.js"
           ],
           "<%= yeoman.dist %>/scripts/vendor.js": [
             ".tmp/scripts/vendor.js"
           ]
         }
       }
    },
    concat: {
      appJS: {
        src: [
          "app/**/*Module.js",
          "app/**/*.js",
          "!app/**/*spec.js"
        ],
        dest: ".tmp/scripts/site.js"
      },
      vendorJS: {
        src: [
          "bower_components/jquery/dist/jquery.js",
          "bower_components/angular/angular.js",
          "bower_components/bootstrap-sass-official/assets/javascripts/bootstrap.js",
          "bower_components/angular-animate/angular-animate.js",
          "bower_components/angular-cookies/angular-cookies.js",
          "bower_components/angular-resource/angular-resource.js",
          "bower_components/angular-route/angular-route.js",
          "bower_components/angular-sanitize/angular-sanitize.js",
          "bower_components/angular-touch/angular-touch.js"
        ],
        dest: ".tmp/scripts/vendor.js"
      },

      dist: {
        src: [
          ".tmp/scripts/site.js"
        ],
        dest: ".tmp/concat/scripts/site.js"
      }
    },

    imagemin: {
      dist: {
        files: [{
          expand: true,
          cwd: "<%= yeoman.app %>/images",
          src: "{,*/}*.{png,jpg,jpeg,gif}",
          dest: "<%= yeoman.dist %>/images"
        }]
      }
    },

    svgmin: {
      dist: {
        files: [{
          expand: true,
          cwd: "<%= yeoman.app %>/images",
          src: "{,*/}*.svg",
          dest: "<%= yeoman.dist %>/images"
        }]
      }
    },

    htmlmin: {
      dist: {
        options: {
          collapseWhitespace: true,
          conservativeCollapse: true,
          collapseBooleanAttributes: true,
          removeCommentsFromCDATA: true,
          removeOptionalTags: true
        },
        files: [{
          expand: true,
          cwd: "<%= yeoman.dist %>",
          src: ["*.html", "views/{,*/}*.html"],
          dest: "<%= yeoman.dist %>"
        }]
      }
    },

    // ng-annotate tries to make the code safe for minification automatically
    // by using the Angular long form for dependency injection.
    ngAnnotate: {
      app: {
        files: [
          {
            expand: true,
            src: [".tmp/scripts/site.js"]
          }
        ]
      }
    },

    // Replace Google CDN references
    cdnify: {
      dist: {
        html: ["<%= yeoman.dist %>/*.html"]
      }
    },

    // Copies remaining files to places other tasks can use
    copy: {
      dist: {
        files: [{
          expand: true,
          dot: true,
          cwd: "<%= yeoman.app %>",
          dest: "<%= yeoman.dist %>",
          src: [
            "*.{ico,png,txt}",
            ".htaccess",
            "*.html",
            "views/{,*/}*.html",
            "images/{,*/}*.{webp}",
            "styles/fonts/{,*/}*.*"
          ]
        }, {
          expand: true,
          cwd: ".tmp/images",
          dest: "<%= yeoman.dist %>/images",
          src: ["generated/*"]
        }, {
          expand: true,
          cwd: ".",
          src: "bower_components/bootstrap-sass-official/assets/fonts/bootstrap/*",
          dest: "<%= yeoman.dist %>"
        }]
      },
      styles: {
        expand: true,
        cwd: "<%= yeoman.app %>/styles",
        dest: ".tmp/styles/",
        src: "{,*/}*.css"
      },
      scripts: {
        expand: true,
        cwd: "<%= yeoman.app %>/scripts",
        dest: ".tmp/scripts/",
        src: "{,*/}*.js"
      }
    },

    // Run some tasks in parallel to speed up the build process
    concurrent: {
      server: [
        "compass:server",
        "concat:appJS",
        "concat:vendorJS"
      ],
      test: [
        "compass"
      ],
      dist: [
        "compass:dist",
        "imagemin",
        "svgmin"
      ]
    },

    // Test settings
    karma: {
      unit: {
        configFile: "test/karma.conf.js",
        singleRun: true
      }
    }
  });

  grunt.registerTask("serve", "Compile then start a connect web server", function (target) {
    if (target === "dist") {
      return grunt.task.run(["build", "connect:dist:keepalive"]);
    }

    grunt.task.run([
      "clean:server",
      "wiredep",
      "concurrent:server",
      "autoprefixer:server",
      "connect:livereload",
      "watch"
    ]);
  });

  grunt.registerTask("server", "DEPRECATED TASK. Use the serve task instead", function (target) {
    grunt.log.warn("The `server` task has been deprecated. Use `grunt serve` to start a server.");
    grunt.task.run(["serve:" + target]);
  });

  grunt.registerTask("test", [
    "clean:server",
    "wiredep",
    "concurrent:test",
    "autoprefixer",
    "connect:test",
    "karma"
  ]);

  grunt.registerTask("build", [
    "clean:dist",
    "wiredep",
    "useminPrepare",
    "concurrent:dist",
    "autoprefixer",
    "concat:dist",
    "copy:dist",
    "cdnify",
    "cssmin",
    "uglify",
    "filerev",
    "usemin",
    "htmlmin"
  ]);

  grunt.registerTask("default", [
    "newer:jshint",
    "newer:jscs",
    "test",
    "build"
  ]);

  grunt.registerTask("e2e", [
    "protractor:all"
  ]);
};
