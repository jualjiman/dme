$(function(){
	initialize();
});

//contact map
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

$("#btnSend").on("click",function(e){
	var $name = $("#tfName");
	var $email = $("#tfEmail");
	var $message = $("#tfDescription");
	var email_regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;

	e.preventDefault();

	if( $name.val() !== "" && $email.val() !== "" && $message.val() !== ""){
			if( email_regex.test($email.val()) === true ){
				$.post(
					"contact_process.php",
					{
						name:$name.val(),
						email:$email.val(),
						message:$message.val()
					},
					function(response){
						if( response.indexOf("[OK]") !== -1 ){
							$('#contact-answ').html('<strong>Muchas gracias</strong>, El mensaje ha sido enviado satisfactoriamente.').hide().fadeIn();
							$name.val("");
							$email.val("");
							$message.val("");
						}
						else{
							$('#contact-answ').html('<strong>Error</strong> al enviar el mensaje.').hide().fadeIn();
						}
					}
				);
			}
			else{
				$('#contact-answ').html('El <strong>formato de email</strong>  que ingreso es invalido.').hide().fadeIn();
			}
		}
		else{
			$('#contact-answ').html('<strong>Todos</strong> los campos son requeridos.').hide().fadeIn();
		}
});
