require('babel-core/register');

exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['e2e/**/*.spec.js'],

    multiCapabilities: [
        {
            browserName: 'chrome'
        },
        // {
        //     browserName: 'phantomjs',
        //     'phantomjs.binary.path': require('phantomjs-prebuilt').path
        // }
    ]
};