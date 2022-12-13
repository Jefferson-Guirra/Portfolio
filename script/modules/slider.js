export default function slider (box,buttons){
  const container = document.querySelector(box)
  const width = container.getBoundingClientRect().width
  const spins = document.querySelectorAll(buttons)
  
  const handleTranslate = (number)=>{
    container.style.transform= `translate3d(-${width*number}px,0px,0px)`
    spins.forEach(item=>{
      if(number === Number(item.getAttribute('data-value'))){
        item.classList.add('ativo')
      }
      else{
        item.classList.remove('ativo')
      }
    })
    
  }
  spins.forEach(item=>{
    item.addEventListener('click',({target})=>handleTranslate(Number(item.getAttribute('data-value'))))
  })
}


