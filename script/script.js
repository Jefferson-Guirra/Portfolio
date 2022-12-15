import Card from "./modules/skills.js";
import listSkill from './modules/listSkill.js'
import animaScroll from './modules/animaScroll.js'
import slider from './modules/slider.js'
import activeIcon from "./modules/activeIconScrollMenu.js";


const swiper = new Swiper('.mySwiper', {
  loop:'true',
  effect: 'flip',
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  }
})
const skillsSwiper = new Swiper('.skillSwiper', {
  slidesPerView: 3,
  spaceBetween: 10,
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  breakpoints:{
    500:{
      slidesPerView:3,
      spaceBetween:5
    },
    300:{
      slidesPerView:2,
      spaceBetween:15
    }
  }
  
})

const scrollAnima = animaScroll('[data-anima]')
scrollAnima()
const skillList =listSkill()
const cardSkill = new Card('.skill-card','.skill-text p',skillList)
cardSkill.init()
activeIcon()




















