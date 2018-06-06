M.AutoInit();

/* $('a[href^="#"]').on('click', function(event) {
    var target = $(this.getAttribute('href'));
    if( target.length ) {
        event.preventDefault();

            $('html, body').stop().animate({
            scrollTop: target.offset().top
        }, 1000);
    }
}); */




/* Fonction avec scroll précis */


$('a[href^="#"]').on('click', function(event) {
    var target = $(this.getAttribute('href'));
    if( target.length ) {
        event.preventDefault();

        var scroll = target.offset().top - 90;
        $('html, body').stop().animate({
            scrollTop: scroll
        }, 1000);
    }
});




  /* $(document).ready(function(){
    $('.sidenav').sidenav();
  });
 */