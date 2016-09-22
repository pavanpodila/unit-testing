process.env.BABEL_ENV = 'test';

const webpackConfig = require('./webpack.config');
webpackConfig.entry = {};

module.exports = function (config) {
    config.set({

        basePath: '',
        frameworks: ['jasmine'],

        files: [
            'src/test.index.js'
        ],
        exclude: [],

        preprocessors: {
            'src/test.index.js': ['webpack', 'sourcemap']
        },
        webpack: webpackConfig,
        webpackMiddleware: {stats: 'minimal'},
        reporters: ['mocha', 'coverage'],
        coverageReporter: {
            dir : 'coverage',
            reporters: [
                {
                    type: 'html',
                    subdir: 'html'
                }
            ]
        },
        browsers: ['Chrome'],

        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: false,
        singleRun: true,
        concurrency: Infinity
    })
};
