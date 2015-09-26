(function() {
  "use strict";

angular.module("sampleApp.main").controller("mainCtrl", MainCtrl);

  function MainCtrl() {
    var vm = this;
    vm.awesomeThings = [
      "HTML5 Boilerplate",
      "AngularJS",
      "Karma"
    ];
  }
})();
