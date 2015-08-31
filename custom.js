$("a[href^='#']").on('click', function(e) {
   e.preventDefault();
   var hash = this.hash;
   $('html, body').animate({
       scrollTop: $(this.hash).offset().top
   }, 500, function(){
       window.location.hash = hash;
   });
});

$(document).scroll(function() {
    var t = $(this).scrollTop() + $(window).height() / 2;

    $('.active').removeClass('active');
    if(t < $('#about').position().top) {
        $('#main-button').addClass('active');
    } else if(t >= $('#about').position().top && t < $('#resume').position().top) {
        $('#about-button').addClass('active');
    } else if(t >= $('#resume').position().top && t < $('#contact').position().top) {
        $('#resume-button').addClass('active');
    } else if(t >= $('#contact').position().top) {
        $('#contact-button').addClass('active');
    }
});
