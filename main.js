let img = $("#image");
let body = $("body");
let images = ["img1.png", "img2.png", "img3.png"];
function loadImg(index){
    img.attr("src", images[index]);
}
let imageIndex = 0;
function loadImages(){
    loadImg(imageIndex);
    img.hide().fadeIn(2000);
    img.fadeOut(2000);
    imageIndex++;
    if(imageIndex > images.length) {
        img.remove();
    }
}
loadImages();
setInterval(loadImages, 4000);