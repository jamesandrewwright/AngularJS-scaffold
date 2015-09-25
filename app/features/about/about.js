(function() {
  "use strict";

/**
 * @ngdoc function
 * @name neighbourhoodWatchApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the neighbourhoodWatchApp
 */
angular.module("neighbourhoodWatchApp.about")
  .controller("AboutCtrl", function ($scope) {
    $scope.awesomeThings = [
      "HTML5 Boilerplate",
      "AngularJS",
      "Karma"
    ];
  });
})();
