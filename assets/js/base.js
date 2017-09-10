
//this function is used to add smooth scrolling to different views of the website
$("a[href^='#']").on('click', function(e) {
   e.preventDefault();
   var hash = this.hash;
   $('html, body').animate({
       scrollTop: $(this.hash).offset().top
   }, 500, function(){
       window.location.hash = hash;
   });
});

//this function is used to change the active link in the navbar in accordance
//with how far down the page the user has scrolled
$(document).scroll(function() {
    var t = $(this).scrollTop() + $(window).height() / 2;

    $('.active').removeClass('active');
    if(t < $('#about').position().top) {
        $('#main-button').addClass('active');
    } else if(t >= $('#about').position().top && t < $('#resume').position().top) {
        $('#about-button').addClass('active');
    } else if(t >= $('#resume').position().top && t < $('#projects').position().top) {
        $('#resume-button').addClass('active');
    } else if(t >= $('#projects').position().top && t < $('#contact').position().top) {
        $('#projects-button').addClass('active');
    } else if(t >= $('#contact').position().top) {
        $('#contact-button').addClass('active');
    }
});
