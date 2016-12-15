module.exports = function(config){
    config.set({
    basePath : '../',
    files : [
        'test/e2e/**/*.js'
    ],
    autoWatch : false,
    browsers : ['Firefox'],
    frameworks: ['ng-scenario'],
    singleRun : true,
    proxies : {
      '/': 'http://localhost:8000/'
    },
    plugins : [
            'karma-firefox-launcher',
            'karma-jasmine',
            'karma-ng-scenario'
            ]
    })
};
