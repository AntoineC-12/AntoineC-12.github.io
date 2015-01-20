'use strict';

/* App Module */

<<<<<<< HEAD
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
=======
var phonecatApp = angular.module('phonecatApp', [
  'ngRoute',
  'phonecatControllers',
  'phonecatFilters',
  'phonecatServices'
]);

phonecatApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/phones', {
        templateUrl: 'partials/phone-list.html',
        controller: 'PhoneListCtrl'
      }).
      when('/phones/:phoneId', {
        templateUrl: 'partials/phone-detail.html',
        controller: 'PhoneDetailCtrl'
      }).
      otherwise({
        redirectTo: '/phones'
>>>>>>> 5e8dcaa3dc5c9beb36603e3f2973f0d47fddb85b
      });
  }]);
