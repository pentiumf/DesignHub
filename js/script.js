$(document).ready(function () {

        $('.menu').click(function() {
            $('.overlay').addClass('anim');
            $('.menu').hide();
            $('.close').show();
        });
    
        $('.close').click(function() {
            $('.overlay').removeClass('anim');
            $('.close').hide();
            $('.menu').show();
        });
        
        
        
       
        setInterval(moveRight, 3000);
        
        function moveRight() {
        var currentSlide = jQuery(".active-fade");
                var nextSlide = currentSlide.next();

                if (nextSlide.length === 0) {
                    nextSlide = jQuery(".fade").first();
                }

            currentSlide.fadeOut(1000).removeClass("active-fade");
            nextSlide.fadeIn(1000).addClass("active-fade");
        }
});