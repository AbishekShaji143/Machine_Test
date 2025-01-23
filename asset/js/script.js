$(document).ready(function(){
    $('.promotion-list.owl-carousel').owlCarousel({
        loop:true,
        margin:50,
        nav:true,
        dots:false,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
               
            },
            991:{
                items:2,
            },
            1200:{
                items:3,
            }
        }
    });
    $('.event-list.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        dots:false,
        responsiveClass:true,
    
        autoHeight: true,
        autoplay:true,
        autoplayTimeout:5000,
        responsive:{
            0:{
                items:1,
               
            },
            991:{
                items:1,
                stagePadding: 0,
            },
            1000:{
                items:2,
            }
        }
    });
    $(window).scroll(function() {    
    var scroll = $(window).scrollTop();

     //>=, not <=
    if (scroll >= 200) {
        //clearHeader, not clearheader - caps H
        $("header").addClass("fixed-header");
    }
    else{
        $("header").removeClass("fixed-header");
    }
}); //missing );
    // add class on click 
});