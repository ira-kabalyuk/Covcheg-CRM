console.log('\'Allo \'Allo!');

 
jQuery(document).ready(function() {

  //object-fit for ie

	var userAgent, ieReg, ie, ieEdge, ieE;
	userAgent = window.navigator.userAgent;
	ieReg = /msie|Trident.*rv[ :]*11\./gi;
	ieEdge = /Edge/i;
	ie = ieReg.test(userAgent);
	ieE= ieEdge.test(userAgent);

	if(ie || ieE) {
		$(".img-wrap").each(function () {
			var $container = $(this),
					imgUrl = $container.find("img").prop("src");
			if (imgUrl) {
				$container.css("backgroundImage", 'url(' + imgUrl + ')').addClass("custom-object-fit");
			}
		});
	}	

});


	


