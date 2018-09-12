$(document).ready(function(){
    
    $(window).on('scroll', function(){
            if($(window).scrollTop()){
                $('.logo').addClass('logosmall');
            }
            else {
                $('.logo').removeClass('logosmall');
            }
        });
});