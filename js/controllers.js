'use strict';

/* Controllers */

<<<<<<< HEAD
var myAppControllers = angular.module('myAppControllers', []);

myAppControllers.controller('resumeCtrl', ['$scope','$translate', 'localStorageService',
  function($scope, $translate, localStorageService) {
  	var prefLang = localStorageService.get('lang');
	$translate.use(prefLang || $translate.preferredLanguage().match(/^..(?=_)/)[0]);
  	var lang = $translate.use();
  	$scope.toggleButton = lang == 'fr' ? "English" : "Français";
  	$scope.nextLang = lang == 'fr' ? 'en' : 'fr';

  	$scope.toggleLanguage = function(langKey) {
  		$scope.toggleButton = langKey == 'fr' ? "English" : "Français";
  		$scope.nextLang = langKey == 'fr' ? 'en' : 'fr';
  		$translate.use(langKey).
  		preferredLanguage(langKey);
  		localStorageService.set('lang', langKey);
  	};

=======
var phonecatControllers = angular.module('phonecatControllers', []);

phonecatControllers.controller('PhoneListCtrl', ['$scope', 'Phone',
  function($scope, Phone) {
    $scope.phones = Phone.query();
    $scope.orderProp = 'age';
  }]);

phonecatControllers.controller('PhoneDetailCtrl', ['$scope', '$routeParams', 'Phone',
  function($scope, $routeParams, Phone) {
    $scope.phone = Phone.get({phoneId: $routeParams.phoneId}, function(phone) {
      $scope.mainImageUrl = phone.images[0];
    });

    $scope.setImage = function(imageUrl) {
      $scope.mainImageUrl = imageUrl;
    }
>>>>>>> 5e8dcaa3dc5c9beb36603e3f2973f0d47fddb85b
  }]);
