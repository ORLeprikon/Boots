const swiper = new Swiper('.swiper', {
    direction: 'vertical',
    slidesPerView: 1,
    freeMode: true,
    // loop: true, // по кругу
    navigation:{
        nextEl:'.swiper-button-next',
        prevEl:'.swiper-button-prev'
    },
    allowTouchMove: false,
    speed: 500
});


//--------------------------------------------------------
let switchMode = document.getElementById("switch");

switchMode.onclick = function(){
    let theme = document.getElementById("theme");
    let btn = document.getElementById("text");

    if(theme.getAttribute("href") == "style/css/light-mode.css"){
        theme.href = "style/css/dark-mode.css"
        btn.innerHTML =  'BLACK';
    }else{
        theme.href = "style/css/light-mode.css"
        btn.innerHTML =  'WHITE';
    }
}



