import debounce from "../helper/debounce.js"
export function animaScroll(elements) {
  const sections =document.querySelectorAll(elements)
  const calcTopDebounce = debounce(calcTop,100)
  
  window.addEventListener('scroll',calcTopDebounce)
 
  window.onload = ()=>{ 
    calcTop()
  }

  function calcTop(){
    
    sections.forEach(section=>{
      const dist = section.offsetTop - (window.innerHeight * 0.6)
      if(window.scrollY > dist){
        section.classList.add('active')
      }
      else{
        section.classList.remove('active')
      }
      
    })
  }

  return calcTop
}

