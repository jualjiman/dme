$(function(){
	initialize();
});

function initialize() {

	var ubicacion = new google.maps.LatLng(19.389027, -99.165297);

	var mapOptions = {
	  	center: ubicacion,
	  	zoom: 15,
	  	mapTypeId: google.maps.MapTypeId.ROADMAP
	};

	var map = new google.maps.Map($("#map-content")[0], mapOptions);

	var marker = new google.maps.Marker({
	      position: ubicacion,
	      map: map,
	      title: 'Amores 707 interior 402 Col. Del Valle Del. Benito Juárez, México D.F ',
	      icon: "images/marker.png"
	});
}

//resizeable navbar menu
$(document).on("scroll",function(){
    if($(document).scrollTop()>100){
        $("nav").addClass("small");
        // $("#mainContent").addClass("smallTopAutoPadding").removeClass("topAutoPadding");

    } else{
        $("nav").removeClass("small");
        // $("#mainContent").addClass("topAutoPadding").removeClass("smallTopAutoPadding");
    }
});