import Card from "./modules/skills.js";
import listSkill from './modules/listSkill.js'
import animaScroll from './modules/animaScroll.js'
import activeIcon from "./modules/activeIconScrollMenu.js";
import createSwiperSlider from "./modules/createSwiperSlider.js";

createSwiperSlider()
const scrollAnima = animaScroll('[data-anima]')
scrollAnima()
const skillList =listSkill()
const cardSkill = new Card('.skill-card','.skill-text p',skillList)
cardSkill.init()
activeIcon()




















