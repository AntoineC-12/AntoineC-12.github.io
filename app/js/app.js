'use strict';

/* App Module */

var myApp = angular.module('myApp', [
  'ngRoute',
  'myAppControllers',
  'myAppTranslate',
  'LocalStorageModule'
]);

myApp.config(['localStorageServiceProvider', function(localStorageServiceProvider){
  localStorageServiceProvider.setPrefix('ls');
}]).
config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/resume', {
        templateUrl: 'partials/resume.html',
        controller: 'resumeCtrl'
      }).
      otherwise({
        redirectTo: '/resume'
      });
  }]);
