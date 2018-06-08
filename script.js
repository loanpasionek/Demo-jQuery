M.AutoInit();

/* Fonction scroll */

/* $('a[href^="#"]').on('click', function(event) {
    var target = $(this.getAttribute('href'));
    if( target.length ) {
        event.preventDefault();

            $('html, body').stop().animate({
            scrollTop: target.offset().top
        }, 1000);
    }
}); */


/* ---------------------------------------------------------- */

/* Fonction avec scroll précis */                            /* A faire : déclarer la hauteur de la nav +20px et l'ajouter à la place du '90' brut */


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





/* Init floating button */
$(document).ready(function(){
    $('.fixed-action-btn').floatingActionButton();
  });

/* Konami code */


var key = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65],  /* variable sous forme de tableau */
p = 0; /* init la var p à 0 */
$(document).keydown(function (e) {
    if (e.keyCode === key[p++]) { /* permet la progression dans le tableau si keycode correspond à une valeur du tableau */
        if (p === key.length) {
            $('#slj').toggle('hidden');
            p = 0;
            return false;
        }
    }
    else {
        
        p = 0;
    }
});