import {Card, listSkill, animaScroll, activeIcon, createSwiperSlider} from './modules/protocols.js'

createSwiperSlider()
const scrollAnima = animaScroll('[data-anima]')
scrollAnima()
const skillList =listSkill()
const cardSkill = new Card('.skill-card','.skill-text p',skillList)
cardSkill.init()
activeIcon()




















