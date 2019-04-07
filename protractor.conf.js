exports.config = {
    //Set global scripts timeout
    allScriptsTimeout: 10000,

    //Directly connect with browser driver, without setting up server
    directConnect: true,

    //Set browser to be used in tests
    capabilities: {
        browserName: "chrome"
    },

    //Set to custom if using different framework than Jasmine
    framework: 'jasmine',

    //Specify path to feature files
    specs: [
        './e2e/**/*.spec.ts'
    ],

    //These will be executed before cucumber hooks!
    onPrepare() {
        browser
            .manage()
            .window()
            .maximize();
        browser
            .manage()
            .timeouts()
            .implicitlyWait(5000);

        //Turns off waiting for angular! If set to false, be sure you are testing an Angular app.
        browser.ignoreSynchronization = true;

        //Enable TypeScript in the tests
        require("ts-node").register({
            project: "tsconfig.json"
        });
    },

    //This will be executed after all tests and hooks!
    onComplete() {
        browser.quit();
    }
};