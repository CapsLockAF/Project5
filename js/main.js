$(document).ready(function(){

    var $grid = $('.grid').imagesLoaded( function() {
        $grid.isotope({
            itemSelector: '.grid-item',
            masonry: {
                columnWidth: '.grid-sizer',
                horizontalOrder: true,
                gutter: '.gutter-sizer'
            },
            percentPosition: true,
        });
    });

    $('.filter-button-group').on( 'click', '.filterBtn', function() {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue });
    });

    $('.button-group').each( function( i, buttonGroup ) {
        var $buttonGroup = $( buttonGroup );
        $buttonGroup.on( 'click', 'button', function() {
            $buttonGroup.find('.is-checked').removeClass('is-checked');
            $( this ).addClass('is-checked');
        });
    });
});

$(document).ready(function(){
    // scroll ref
    $("#menu").on("click",".portfolio", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 500);
    });
    // menu hover
    // $("#burger_menu, #menu").mouseenter(function(){
    //     $('#menu').addClass('hover_menu')
    // }).mouseleave(function(){
    //     $('#menu').removeClass('hover_menu')
    // });
    $("#burger_menu").click(function(){
        $(this).toggleClass('line_drop');
        $('#menu').toggleClass('hover_menu')
    });
    // OWL-carusel
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin: 0,
        dots:true,
        nav:false,
        dotsContainer:'.dots-comm',
        dotsEach:true,
        autoWidth:true,
        autoplay:true,
        autoplaySpeed:1000,
        dotsSpeed:1000,
        fluidSpeed:250,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });
// parala[ home yead]

});




