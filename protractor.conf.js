exports.config = {
    //Global timeout
    allScriptsTimeout: 10000,

    directConnect: true,

    //Be passed to the webdriver instance (ike browser)
    capabilities: {
        browserName: "chrome"
    },

    //Test framework
    framework: 'jasmine',

    //Where the test files are
    specs: [
        './e2e/**/*.spec.ts'
    ],

    //Before tests start
    onPrepare() {
        browser
            .manage()
            .window()
            .maximize();
        browser
            .manage()
            .timeouts()
            .implicitlyWait(5000);

        //Turned off because our page is not Angular page
        browser.ignoreSynchronization = true;

        //Enable TypeScript in the tests
        require("ts-node").register({
            project: "tsconfig.json"
        });
    },

    //After the tests end
    onComplete() {
        browser.quit();
    }
};
