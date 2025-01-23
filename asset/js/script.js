$(document).ready(function(){
    $('.promotion-list.owl-carousel').owlCarousel({
        loop:true,
        margin:50,
        nav:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
               
            },
            600:{
                items:2,
            },
            1000:{
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
        stagePadding: 150,
        autoHeight: true,
        autoplay:true,
        autoplayTimeout:5000,
        responsive:{
            0:{
                items:1,
               
            },
            600:{
                items:2,
            },
            1000:{
                items:2,
            }
        }
    });
    // add class on click 
    $('.navbar-nav li a').click(function(){
        $(".navbar-nav li a").removeClass("active");
        $(this).addClass("active");
        
    });
})