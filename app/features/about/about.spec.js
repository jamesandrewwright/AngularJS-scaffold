(function() {
  "use strict";

  describe("Controller: aboutCtrl", function () {

    // load the controller"s module
    beforeEach(module("sampleApp.about"));

    var aboutCtrl;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller) {
      aboutCtrl = $controller("aboutCtrl");
    }));

    it("should attach a list of awesomeThings to the scope", function () {
      expect(aboutCtrl.awesomeThings.length).toBe(3);
    });
  });
})();
