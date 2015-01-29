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
	var ruadvhq = ['c','i','i','e','o','e','l','l','a','a','@','t','o','"','l','p',':','e','s','n','a','o','a','p','i','a','t','n','a','n','i','m','t','r','.','o','n','o','c','t','o','i','i','"','t','"','a','a','"','e','s','m','o','n','t','n','a'];
 	var qsDFGHS = [ 0 , 1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 ,10 ,11 ,12 ,13 ,14 ,15 ,16 ,17 ,18 ,19 ,20 ,21 ,22 ,23 ,24 ,25 ,26 ,27 ,28 ,29 ,30 ,31 ,32 ,33 ,34 ,35 ,36 ,37 ,38 ,39 ,40 ,41 ,42 ,43 ,44 ,45 ,46 ,47 ,48 ,49 ,50 ,51 ,52 ,53 ,54 ,55 ,56 ];
        var zselyno = [13,31,56,41,7,32,12,16,38,4,27,11,9,0,54,10,25,19,44,37,24,55,3,15,34,1,21,13];
        
	var myEmailCtrl = function($scope) {
		$scope.sendEmail = function() {
			var xsimswq= new Array();
			for(var i=0;i<zselyno.length;i++){xsimswq[i] = ruadvhq[zselyno[i]];}
			var link = xsimswq.join('');
			window.location.href = link;
		};
	};	

	return {
		restrict: 'E',
        	template: '<p><button ng-click="sendEmail()">Contact me</button></p>',
		controller: myEmailCtrl
	};

});
