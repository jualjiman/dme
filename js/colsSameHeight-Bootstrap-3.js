// media queries sizes?
var sm = 768, md = 992, lg = 1200;
var delay1 = 3000;//milisecconds
var delay2 = 4000;//milisecconds
var delay3 = 6000;//milisecconds
var delay4 = 12000;//milisecconds


function startFix(){
	setTimeout(setObjects,delay1);
	setTimeout(setObjects,delay2);
	setTimeout(setObjects,delay3);
	setTimeout(setObjects,delay4);
}

function setObjects(){
	// specific selectors to cols (class) to fix
	var objects = [$(".fx")];
	//current windows size
	var win = $(window).width();

	for(var i = 0; i < objects.length; i++)
		sameHeight(objects[i],win);
}

function sameHeight($object, win){
	var maxHeight = 0;
	var objSize = $object.size();
	// var init = 0, fin = objSize;

	if(win > sm){
		
		// iterando los objectos
		// $object.slice(init,fin).each( function(){
		$object.each( function(){
			$( this ).height('initial');
			cur = $( this ).height();
	    	if(cur > maxHeight)
	    		maxHeight = cur;
	    });
	    var min = (maxHeight*0.8);
	    $object.each( function(){ 
	    	cur = $( this ).height();
	    	if(cur <= min){
	    		$(this).height(min);
	    	}
	    	else{
	    		$(this).height(maxHeight);
	    	}
	    });
	}
	else
	{
		$object.each( function(){
			$( this ).height('initial');
		});
	}
}
