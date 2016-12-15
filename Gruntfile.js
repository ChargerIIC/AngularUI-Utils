module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      options: { separator: ';' },
      dist: {
          src: [ '../bower_components/jquery/dist/jquery.js',
                '../bower_components/fullcalendar/dist/fullcalendar.js',
                '../bower_components/momentjs/moment.js',
                 '../bower_components/angular/angular.js',
                 '../bower_components/angular-ui-calendar/src/calendar.js',
                 'src/js/vendor/ui-utils.js',
                 'src/js/vendor/bootstrap.js',
                 'src/js/app.js',
                 'src/js/controllers.js',
                 'src/js/directives.js',
                 'src/js/filters.js' ],
          dest: 'dist/js/<%= pkg.name %>.js'
      }
    },
    copy: {
      main: {
        files: [
              { expand: true, cwd: 'src/css/', src: ['**'], dest: 'dist/css/' },
         { expand: true, cwd:'src/bower_components/fullcalendar/', src: ['*.css'], dest: 'dist/css/' }
        ]
      },
    },
    targethtml: {
      dist: {
        files: {
          'dist/index.html': 'src/index.html'
        }
      }
    },
    karma: {
      unit: {
        configFile: 'conf/karma.conf.js',
        singleRun: true
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-targethtml');
  grunt.loadNpmTasks('grunt-karma');
  grunt.registerTask('default', ['karma', 'concat', 'targethtml', 'copy']);
}
