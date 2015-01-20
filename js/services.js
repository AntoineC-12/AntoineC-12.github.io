'use strict';

/* Services */

<<<<<<< HEAD
var myAppTranslate = angular.module('myAppTranslate', ['pascalprecht.translate', 'ngCookies']);

myAppTranslate.config(function($translateProvider) {
	$translateProvider.registerAvailableLanguageKeys(['en','fr']);
	$translateProvider.useStaticFilesLoader({
  		prefix: '/app/lang/',
  		suffix: '.json'
	}).
	determinePreferredLanguage();
	$translateProvider.useLocalStorage();
}); 
=======
var phonecatServices = angular.module('phonecatServices', ['ngResource']);

phonecatServices.factory('Phone', ['$resource',
  function($resource){
    return $resource('phones/:phoneId.json', {}, {
      query: {method:'GET', params:{phoneId:'phones'}, isArray:true}
    });
  }]);
>>>>>>> 5e8dcaa3dc5c9beb36603e3f2973f0d47fddb85b
