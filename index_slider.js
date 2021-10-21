var i = 0;
var images = ['image/slider/affiche_1.jpg','image/slider/affiche_2.jpg','image/slider/affiche_3.jpg','image/slider/affiche_4.jpg','image/slider/affiche_5.jpg','image/slider/affiche_6.jpg'] ;
var time = 10000;

function changeImg() {

    document.slide.src = images[i];
    if (i < images.length - 1) {
        i ++;
    } else {
        i = 0;
    }
    setTimeout("changeImg()",time);
}
window.onload = changeImg;