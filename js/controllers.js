'use strict';

/* Controllers */

var myAppControllers = angular.module('myAppControllers', []);

myAppControllers.controller('resumeCtrl', ['$scope','$translate','$compile','$filter','localStorageService',
  function($scope, $translate, $compile, $filter, localStorageService) {
  	var prefLang = localStorageService.get('lang');
	$translate.use(prefLang || $translate.preferredLanguage().match(/^..(?=_)?/)[0]);
  	var lang = $translate.use();
  	$scope.toggleButton = lang == 'fr' ? "English" : "Français";
  	$scope.nextLang = lang == 'fr' ? 'en' : 'fr';

  	$scope.toggleLanguage = function(langKey) {
  		$scope.toggleButton = langKey == 'fr' ? "English" : "Français";
  		$scope.nextLang = langKey == 'fr' ? 'en' : 'fr';
  		$translate.use(langKey);
  		$translate.preferredLanguage(langKey);
  		localStorageService.set('lang', langKey);
  	};

  	$scope.parseHtml = function(str) {
  		var tr = $filter('translate')(str);
  		return $compile(tr)($scope);
  	};

  }]);
