'use strict';

/* Directives */
var myAppDirectives = angular.module('myAppDirectives',[]);

myAppDirectives.directive('mySection', ['$translate', '$compile', function($translate, $compile) {
		var linkFN, sectionHeight;
		sectionHeight = function() {
  			var total    = $(window).height(),
      		$section = $('section').css('height','auto');

  			if ($section.outerHeight(true) < total) {
    			var margin = $section.outerHeight(true) - $section.height();
    			$section.height(total - margin - 20);
  			} else {
    			$section.css('height','auto');
  			}
		};
		$(window).resize(sectionHeight);
		linkFN = function($scope, element, attrs) {
			$("section h2, section h3").each(function(){  //Petite modification pour éviter que les titres h1 n'apparaissent dans le menu et pour les h3 y apparaissent.
     			$("nav ul").append($compile("<li class='tag-" + this.nodeName.toLowerCase() + "'><a href='#" + $(this).text().toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g,'') + "'> "+ $(this).text() + "</a></li>")($scope));
    			$(this).attr("id",$(this).text().toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g,''));
   				$("nav ul li:first-child a").parent().addClass("active");
  			});
  
 			$("nav ul li").on("click", "a", function(event) {
    			var position = $($(this).attr("href")).offset().top - 190;
   				$("html, body").animate({scrollTop: position}, 400);
    			$("nav ul li a").parent().removeClass("active");
    			$(this).parent().addClass("active");
    			event.preventDefault();    
  			});
  
  			sectionHeight();
  
  			$('img').load(sectionHeight);
		};

		return {
			restrict: 'E',
			link: linkFN
		};
	}
]);

myAppDirectives.directive('myLinkedInCard', [function(){
	var linkedInCard='<script id="linkedIn" type="IN/MemberProfile" data-id="https://www.linkedin.com/pub/antoine-pouillaude/90/326/644" data-format="inline" data-related="false"></script>';
	var linkedInlink='<script type="IN/MemberProfile" data-id="https://www.linkedin.com/pub/antoine-pouillaude/90/326/644" data-format="hover" data-text="Antoine POUILLAUDE" data-related="false"></script>';

	var linkFN = function($scope, element, attrs) {
		if(IN.parse)
			IN.parse();
	};

	return {
		restrict: 'E',
		template: '<script type="IN/MemberProfile" data-id="https://www.linkedin.com/pub/antoine-pouillaude/90/326/644" data-format="inline" data-related="false"></script>',
		link: linkFN
	};
}]);

myAppDirectives.directive('myLinkedIn', [function(){
	var linkFN = function($scope, element, attrs) {
		if(IN.parse)
			IN.parse();
	};

	return {
		restrict: 'E',
		template: '<script type="IN/MemberProfile" data-id="https://www.linkedin.com/pub/antoine-pouillaude/90/326/644" data-format="click" data-text="Antoine POUILLAUDE" data-related="false"></script>',
		link: linkFN
	};
}]);

myAppDirectives.directive('myEmailDir', ['$window', function($window) {
	var ruadvhq = ['c','i','o','a','@','t','l','p',':','e','n','a','o','t','o','n','i','m','.','n','c','t','t','a','o'];
	var qsDFGHS = [ 0 , 1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 ,10 ,11 ,12 ,13 ,14 ,15 ,16 ,17 ,18 ,19 ,20 ,21 ,22 ,23 ,24 ];
	var zselyno = [12,2,25,11,14,17,3,22,6,21,9,15,5,13,8,20,24,0,23,16,7,4,10,1,18];
        
	var myEmailCtrl = function($scope) {
		$scope.sendEmail = function() {
			var xsimswq= new Array();
			for(var i=0;i<zselyno.length;i++){xsimswq[zselyno[i]] = ruadvhq[i];}
			var link = xsimswq.join('');
			alert(link);
			$window.location.href = link;
		};
	};	

	return {
		restrict: 'E',
        	template: '<p><button ng-click="sendEmail()">Contact me</button></p>',
		controller: myEmailCtrl
	};

}]);
