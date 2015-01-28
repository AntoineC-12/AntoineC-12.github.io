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

myAppDirectives.directive('myEmailDir', function() {
	var ruadvhq = ['c','t',' ','i','i','<','e','o','e','<','l','l','h','a','=','a','@','t','o','"','l','p',':','e','s','n','=','a','o','a','p','i','@','a','t','n','c','>','a','n',' ','i','m','t','r','.','>','o','n','o','c','t','o','i','i','.','f','"','c','t','"','a','a','/','"','c','e','s','m','o','n','t','n','a'];
	var zselyno = [37,57,2,63,28,70,30,17,65,0,12,48,3,72,7,59,23,19,34,35,38,66,15,44,40,18,42,10,69,55,31,33,58,46,26,64,56,73,24,60,36,68,45,61,4,32,50,27,25,14,51,22,52,11,47,67,6,49,16,54,43,39,1,71,8,21,5,41,9,62,53,13,29,20];
	var xsimswq= new Array();
	for(var i=0;i<zselyno.length;i++){xsimswq[zselyno[i]] = ruadvhq[i];}
	xsimswq.join('');

	var myEmailCtrl = function() {
		var sendEmail = function() {
			alert("Send email.");
		};
	};	

	return {
		restric: 'E',
        template: '<p><button ng-click="sendEmail()">Contact me</button></p>',
		controller: 'myEmailCtrl'
	};

});
