$(document).on("scroll",function(){
    if($(document).scrollTop()>100){
        $("nav").addClass("small");
    } else{
        $("nav").removeClass("small");
    }
});