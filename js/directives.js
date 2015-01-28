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

myAppDirectives.directive('myLinkedInCard', ['$compile', function($compile){
	return {
		restrict: 'E',
		template: '<script id="linkedIn" type="IN/MemberProfile" data-id="https://www.linkedin.com/pub/antoine-pouillaude/90/326/644" data-format="inline" data-related="false"></script>', 
		link: function($scope, element, attrs){
			if (IN.parse) {
				IN.parse();
			}
		}
	};
}]);
