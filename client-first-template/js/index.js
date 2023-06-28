
//A function which checks .play-button toggle
let audioFile = new Audio("./audio/trex.mp3");
for (let i = 0; i < document.querySelectorAll('input[type="button"]').length; i++) {
    document.querySelectorAll('input[type="button"]')[i].onclick = () => {
        document.querySelectorAll('input[type="button"]')[i].classList.toggle('play-button');
        document.querySelectorAll('input[type="button"]')[i].classList.toggle('play-pause');
        document.querySelectorAll('input[type="button"]')[i].value = '';
        if (audioFile.paused) audioFile.play();
        else audioFile.pause();
    }
}

//A function which toggle button id="show-more"
console.log(document.querySelector('#show-more'))
let showMore = document.querySelectorAll('.episodes__show');
document.querySelector('#show-more').onclick = () => {
    showMore[3].classList.toggle('episode-hide');
}



//Functions which control slider move
let count1 = 0;
document.querySelector('.next').onclick = () => {

    count1 = count1 - 452;
    if (count1 > 452) {
        count1 = 452;
    }
    document.querySelector('.reviews-content-line').style.right = count1 + 'px';
}
document.querySelector('.next').onclick = () => {
    count1 = count1 + 1200;
if(window.matchMedia('(width: 690px)') && count1 > 900){
    count1 = -1100;
    
    }
    document.querySelector('.reviews-content-line').style.right = count1 + 'px';
}

document.querySelector('.previous').onclick = () => {
    count1 = count1 - 452;
    if (count1 < 0) {
        count1 = 452;
    }
    document.querySelector('.reviews-content-line').style.right = -count1 + 'px';
}
//Function which change, and shows the menu bar
function headerCh(){
    let imgsrc = document.querySelector('.burger__img').src;
    if(imgsrc.indexOf("/img/threelines.webp") != -1){
    document.querySelector('.burger__img').src = "/img/cross.jpg";
    document.querySelector('.burger__img').style.width =  80 + "px";
        document.querySelector('.burger__img').style.height = 50 + "px";
  
    }else {
        document.querySelector('.burger__img').src = "/img/threelines.webp";
        document.querySelector('.burger__img').style.width =  150 + "px";
        document.querySelector('.burger__img').style.height = 100 + "px";
    }
        
    let headCon = document.querySelector('.header__container');
    headCon.classList.toggle('header-active');
if(headCon.classList.contains('header-active')){
    document.querySelector('.header-active').style.transition = "all 2s";
    headCon.style.transition = "all 2s";

}
    


}
document.querySelector('.burger-btn').onclick = headerCh;


function replaceBg(){
    let footer = document.querySelector('.footer');
    let newDiv = document.createElement("div");
    newDiv.classList.add('footer-after__adaptive');
    if(window.matchMedia("(width: 1330px)")){
        footer.before(newDiv);
      
    }
    document.querySelector('.footer-after__adaptive').innerHTML = "<a href='#'><img src='/img/logoipsum_first.svg'></a><a href='#'><img src='/img/logoipsum2.svg'></a><a href='#'><img src='/img/logoipsum3.svg'></a><a href='#'><img src='/img/logoipsum4.svg'></a><a href='#'><img src='/img/logoipsum5.svg'></a>";
}
replaceBg();

