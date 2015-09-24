module.exports.config = {
  directConnect: true,
  baseUrl: "http://localhost:9000/",
  rootElement: "html",
  framework: "jasmine2",
  capabilities: {
    browserName: "chrome"
  },
  specs: [
    "e2e/**/*.js"
  ],
  jasmineNodeOpts: {
    // This is to suppress default dot printer
    print: function () {
    }
  },
  onPrepare: function () {
    "use strict";

    require("jasmine-expect");

    var SpecReporter = require("jasmine-spec-reporter");
    jasmine.getEnv().addReporter(new SpecReporter({ displayStacktrace: "all" }));
  }
};
