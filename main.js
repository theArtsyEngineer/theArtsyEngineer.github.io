$(document).on('scroll', function (e) {
    if ($(window).width() > 992) {
        var rgba = $(document).scrollTop() / 500;
        $('.navbar').css('background-color', 'rgba(245, 166, 35,' + rgba + ')');
        
        if(rgba > 0.5){
            $('.logo').css('border', '4px solid white');
        }else{
            $('.logo').css('border', '4px solid #F5A623'); 
        }
    }
})