export default function menuMobile (){
  const eventList = ['touchstart','click']
  const btn = document.querySelector('.btn-menu')
  const menuMobile = document.querySelector('.menu')
  const links = document.querySelectorAll('.menu a')
  
    const btnActive=(event)=>{
      event.preventDefault()
      btn.classList.toggle('active')
      menuMobile.classList.toggle('active')
    }
    const closeMenuLink = (event)=>{
     if(menuMobile.classList.contains('active')){
        menuMobile.classList.remove('active')
        btn.classList.remove('active')
      }

    }
  
    const closeMenuOut = (event)=>{
      if(event.currentTarget === event.currentTarget){
        btn.classList.remove('active')
        menuMobile.classList.remove('active')
      }
    }
    
    eventList.forEach(event=>btn.addEventListener(event,btnActive))
    
    links.forEach(link=>{
      eventList.forEach(event=> link.addEventListener(event,closeMenuLink))
    })
  
    eventList.forEach(event=>menuMobile.addEventListener(event,closeMenuOut))
  
  
  
    
  }
  
