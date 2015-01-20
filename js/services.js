'use strict';

/* Services */

var myAppTranslate = angular.module('myAppTranslate', ['pascalprecht.translate', 'ngCookies']);

myAppTranslate.config(function($translateProvider) {
	$translateProvider.registerAvailableLanguageKeys(['en','fr']);
	$translateProvider.useStaticFilesLoader({
  		prefix: '/lang/',
  		suffix: '.json'
	}).
	determinePreferredLanguage();
	$translateProvider.useLocalStorage();
}); 
