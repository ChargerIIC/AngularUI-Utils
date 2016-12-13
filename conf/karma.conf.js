module.exports = function(config){
    config.set({
    basePath : '../',
    files : [
      'https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.2.22/angular.js',
      'https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.2.22/angular-mocks.js',
      'src/js/**/*.js',
      'test/unit/**/*.js'
    ],
    autoWatch : true,
    frameworks: ['jasmine'],
    browsers : ['Firefox'],
    plugins : ['karma-firefox-launcher', 'karma-jasmine']
})};
