$(document).ready(function(){
    $('.photo__slider').slick({
        arrows:true,
        adaptiveHeight:true,
        slidesToShow:1,
        slidesToScroll:1,
        speed:1000,
        responsive:[
            {
                breakpoint: 540,
                settings: {
                    arrows:false,
                    dots:true,
                }
            }
        ]
        
    });

    $('.menu__btn').on('click',function(){
        $('.menu__list').slideToggle();
    });

  });