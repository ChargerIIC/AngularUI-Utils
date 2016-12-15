module.exports = function (config) {
    config.set({
        basePath: '../',
        files: [
            '/bower_components/jquery/jquery.js',
            '/bower_components/angular/angular.js',
            '/bower_components/angular-mocks/angular-mocks.js',
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
