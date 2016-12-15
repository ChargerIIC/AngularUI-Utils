module.exports = function (config) {
    config.set({
        basePath: '../',
        files: [
           'bower_components/jquery/jquery.js',
           'bower_components/jquery-ui/ui/jquery-ui.js',
           'bower_components/fullcalendar/fullcalendar.js',
           'bower_components/momentjs/moment.js',
           'bower_components/angular/angular.js',
           'bower_components/angular-ui-calendar/src/calendar.js',
           'bower_components/angular-mocks/angular-mocks.js',
           'src/js/app.js',
           'src/js/controllers.js',
           'src/js/filters.js',
           'test/unit/**/*.js'
        ],
        autoWatch: true,
        frameworks: ['jasmine'],
        browsers: ['Firefox'],
        plugins: ['karma-firefox-launcher', 'karma-jasmine']
    })
};
