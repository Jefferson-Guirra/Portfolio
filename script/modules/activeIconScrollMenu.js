import debounce from '../helper/debounce.js'
export function activeIcon() {
  const debounceOnScroll = debounce(onScroll,100)
  function onScroll() {
    activateMenuAtCurrentSection('presetation')
    activateMenuAtCurrentSection('about')
    activateMenuAtCurrentSection('project')
    activateMenuAtCurrentSection('skills')
    activateMenuAtCurrentSection('contact')
  }
  function activateMenuAtCurrentSection(id) {
    const section = document.getElementById(id)

    //linha alvo
    const targetLine = scrollY + innerHeight / 2

    //verificar se a seção passou da linha
    //quais dados vou precisar
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight

    //o topo da seção chegou ou ultrapassou a linha alvo
    const sectionTopReachOrPassedTargetline = targetLine >= sectionTop



    //verificar se a base esta abaixo da linha alvo
    //quais dados vou precisar

    //a seção termina onde
    const sectionEndsAt = sectionTop + sectionHeight

    //O final da seção passou da linha alvo
    const sectionEndPassedTargetLine = sectionEndsAt <= targetLine

    

    //limites da seçao
    const sectionBoundaries =
      sectionTopReachOrPassedTargetline && !sectionEndPassedTargetLine

    const sectionId = section.getAttribute('id')
    

    const menuElement = document.querySelector(`.navLinks a[href*=${sectionId}]`)
    
    menuElement.classList.remove('active')
    if (sectionBoundaries) {
      menuElement.classList.add('active')
    }
  } 
  window.onload=()=>{
    onScroll()
  }
  window.addEventListener('scroll',debounceOnScroll)
}
