$(function() {
    var imgGen = function(item) {
        return {
            img: item.img,
            thumb: item.img,
            full: item.img, // Separate image for the fullscreen mode.
            caption: item.title,
            html: $('<div class="gallery_text">' + item.text + '</div>'), // ...or '<div>123</div>'. Custom HTML inside the frame.
            fit: 'cover', // Override the global fit option.
            any: 123
        }
    };
    var images = gallery.map(function(item) {
       return imgGen(item);
    });
    $('.fotorama').fotorama({
        data: images
    });
});