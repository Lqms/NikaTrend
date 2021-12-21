// varuables
let titles = ["местом", "персонажем", "напитком", "песней", "животным", "едой", "цветом"];
let title_names = ["Мальдивы", "Полумна", "Молоко", "Perfect", "Котик", "Шаурма", "Белый"]
let title_info = [
                "там красиво и от одного вида на душе хорошо и спокойно..",
                "она любит эту вселенную, а еще я осознал, что они реально похожи, но больше по характеру, внешне только цветом волос и то, что выглядят миленько.",
                "я обожаю молоко, всю жизнь пил бы только молоко, а вообще если не обо мне, а аналогию, то тогда она сок апельсин-манго.",
                "ну, потому что смотрите перевод песни и клип и так всё ясно...",
                "она милая, игривая и ласковая, прям как котик. А еще любит понежиться в кроватке и поспать подольше. Зачастую с открытым ртом, но это мило!",
                "много кому нравится шаурма, потому что шаурма классная, а каждый раз когда её ешь, то влюбляешься в неё заново. P.S. Нику я не ем.",
                "белый ассоциируется с чем-то светлым и хорошим, а еще потому что она красится в блондинку"
                ]
let TIME_OF_SLIDE = 3000;
const SLIDE_COUNT = titles.length;
let slide = 0;
let heading_one = document.querySelector("#heading1");
let heading_two = document.querySelector("#heading2");
let image = document.querySelector("#image");
let paragraph = document.querySelector("#paragraph");


// запуск слайдов
let sliderInterval = setInterval(nextSlide, TIME_OF_SLIDE);


// смена слайда
function nextSlide() {
    change_inner();
    slide++;
    if (slide == SLIDE_COUNT) slide = 0;
}


// смена внутренностей слайда
 function change_inner(){
     heading_one.innerHTML = `Если бы Ника была ${titles[slide]}, то это определённо:`;
     heading_two.innerHTML = `${title_names[slide]}`;
     paragraph.innerHTML = `Потому что ${title_info[slide]}`;
     image.style.backgroundImage = `url(images/image${slide}.jpg)` 
} 
  
document.querySelector("#slider-speed").onchange = function(){
    TIME_OF_SLIDE = this.value * 1000;
    clearInterval(sliderInterval);
    sliderInterval = setInterval(nextSlide, TIME_OF_SLIDE);
}