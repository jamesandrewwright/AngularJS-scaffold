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
    "ngTouch"
  ])
  .config(appConfig);

  /*@ngInject*/
  function appConfig($routeProvider) {
    $routeProvider
      .when("/", {
        templateUrl: "views/main.html",
        controller: "MainCtrl"
      })
      .when("/about", {
        templateUrl: "views/about.html",
        controller: "AboutCtrl"
      })
      .otherwise({
        redirectTo: "/"
      });
  }
})();
