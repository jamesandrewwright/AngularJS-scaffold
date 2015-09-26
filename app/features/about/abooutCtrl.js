(function() {
  "use strict";

  angular.module("sampleApp.about").controller("aboutCtrl", AboutCtrl);

  function AboutCtrl() {
    var vm = this;
    vm.awesomeThings = [
      "HTML5 Boilerplate",
      "AngularJS",
      "Karma"
    ];
  }
})();
