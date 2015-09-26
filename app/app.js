(function () {
  "use strict";

  angular.module("sampleApp", [
    "ngAnimate",
    "ngCookies",
    "ngResource",
    "ui.router",
    "ngSanitize",
    "ngTouch",
    "sampleApp.main",
    "sampleApp.about"
  ]);

  angular.module("sampleApp").config(appConfig);

  // @ngInject
  function appConfig($locationProvider, $urlRouterProvider, $urlMatcherFactoryProvider, $stateProvider){
    $locationProvider.html5Mode(false);
    $urlRouterProvider.otherwise("/main");
    $urlMatcherFactoryProvider.strictMode(false);
    $stateProvider
      .state("main", {
        url: "/main",
        templateUrl: "features/main/main.html",
        controller: "mainCtrl",
        controllerAs: "vm"
      })
      .state("about", {
        url: "/about",
        templateUrl: "features/about/about.html",
        controller: "aboutCtrl",
        controllerAs: "vm"
      });
  }
}());
