$(document).ready(init);
function init(){
	//Redimensionnement de la div #personnages
	redimensionnement("personnages",2);
}

function redimensionnement(element,scale){
	$(window).resize(function(){
		$('#'+element).css({
			position:'absolute',
			left: ($(window).width() - $('#'+element).outerWidth())/scale,
			top: ($(window).height() - $('#'+element).outerHeight())/scale
		});
	});
	$(window).resize();
}