(function() {
  "use strict";

/**
 * @ngdoc function
 * @name neighbourhoodWatchApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the neighbourhoodWatchApp
 */
angular.module("neighbourhoodWatchApp.main")
  .controller("MainCtrl", function ($scope) {
    $scope.awesomeThings = [
      "HTML5 Boilerplate",
      "AngularJS",
      "Karma"
    ];
  });
})();
