$(function() {
    var imgGen = function(item) {
        return {
            img: item.img,
            thumb: item.img,
            full: item.img, // Separate image for the fullscreen mode.
            caption: item.title,
            html: $('<div class="gallery_text">' + item.text + '</div>'), // ...or '<div>123</div>'. Custom HTML inside the frame.
            any: 123
        }
    };
    var images = gallery.map(function(item) {
       return imgGen(item);
    });
    $('.fotorama').fotorama({
        data: images
    });

    $('.fotorama')

        .on('fotorama:showend',stabGalleryText )
;
    function stabGalleryText() {
        var full_w = $(".right").width();
        $(".gallery_text, .fotorama__caption__wrap").each(function(){
            var $img = $(this).parent().parent().find('img');
            $(this).css('margin-right', (full_w/2 - $img.width()/2));
        });
    };
    setInterval(stabGalleryText, 100);

    $(".linked.book").click(function() {
       $(".recallWrap").fadeIn(500, function() {
           $(".recallWrap textarea").focus();
       });
    });

    $(".recallWrap #close").click(function() {
        $(".recallWrap").fadeOut(500);
    });

    $(".linked.game").click(function() {
        $(".gameWrap").fadeIn(500, function() {

        });
    });

    $(".gameWrap #close").click(function() {
        $(".gameWrap").fadeOut(500);
    });

});