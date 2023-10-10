$(function(){
    $('.slider_custom').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 968,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
            },
        ]
    });
});