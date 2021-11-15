const elSiteHeader = document.querySelector(".header");

const elSiteHeaderToggle = elSiteHeader.querySelector(".header__button");

if(elSiteHeaderToggle){
  elSiteHeaderToggle.addEventListener("click", function(){
    elSiteHeader.classList.toggle("header--open")
  })
}

const elSiteInfo = document.querySelectorAll(".info__box");
const elSiteInfoToggle = document.querySelectorAll(".info__button");

elSiteInfoToggle.forEach(btn => {
  btn.addEventListener('click', function() {
    btn.closest('.info__box').classList.toggle('info__box--active');
  })
})

const elSiteItem = document.querySelectorAll(".info__item");

elSiteItem.forEach(item => {
  item.addEventListener('click', function() {
    item.classList.toggle('info__item--active');
  })
})
