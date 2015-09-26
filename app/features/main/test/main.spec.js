(function() {
  "use strict";

describe("Controller: MainCtrl", function () {

  // load the controller"s module
  beforeEach(module("sampleApp.main"));

  var mainCtrl;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller) {
    mainCtrl = $controller("mainCtrl");
  }));

  it("should attach a list of awesomeThings to the scope", function () {
    expect(mainCtrl.awesomeThings.length).toBe(3);
  });
});
})();
