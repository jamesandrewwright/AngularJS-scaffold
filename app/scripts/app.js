(function() {
  "use strict";
/**
 * @ngdoc overview
 * @name neighbourhoodWatchApp
 * @description
 * # neighbourhoodWatchApp
 *
 * Main module of the application.
 */
angular
  .module("neighbourhoodWatchApp", [
    "ngAnimate",
    "ngCookies",
    "ngResource",
    "ngRoute",
    "ngSanitize",
    "ngTouch",
    "neighbourhoodWatchApp.main",
    "neighbourhoodWatchApp.about"
  ])
  .config(appConfig);

  /*@ngInject*/
  function appConfig($routeProvider) {
    $routeProvider
      .when("/", {
        templateUrl: "features/main/main.html",
        controller: "MainCtrl"
      })
      .when("/about", {
        templateUrl: "features/about/about.html",
        controller: "AboutCtrl"
      })
      .otherwise({
        redirectTo: "/"
      });
  }
})();
