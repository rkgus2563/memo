let body = document.querySelector("body");
let imgCnt = 6;

function createImage(imgNum){
    let image = new Image();
    image.src=`img/${imgNum}.jpg`;
    body.style.backgroundImage = `url(img/${imgNum}.jpg)`;
}
function init(){
    let imgNum = Math.ceil(Math.random()*imgCnt);    
    createImage(imgNum);
}
init();