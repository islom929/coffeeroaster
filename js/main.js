var elSiteHeader = document.querySelector(".header")

var elSiteHeaderToggle = elSiteHeader.querySelector(".header__button")

if(elSiteHeaderToggle){
  elSiteHeaderToggle.addEventListener("click", function(){
    elSiteHeader.classList.toggle("header--open")
  })
}



var elSiteInfo = document.querySelectorAll(".info__box")

var elSiteInfoToggle = elSiteInfo.querySelector(".info__button")

if(elSiteInfoToggle){
  elSiteInfoToggle.addEventListener("click", function(){
    elSiteInfo.classList.toggle("info__box--active")
  })
}










































