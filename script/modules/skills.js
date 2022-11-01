export default class Card{
  constructor(list,elemetText,info){
    this.cardList = document.querySelectorAll(list)
    this.text = document.querySelector(elemetText)
    this.textInfo = info
    

  }
  mouseEnter(value){
    const index = value.toString()
    this.text.innerText = this.textInfo[index]
    
  }
  mouseLeave(value){
    const index = value.toString()
    this.text.innerText = '*passe o cursor do mouse sobre o card para ler*'

  }
  addEvents(){
    this.cardList.forEach((card,index)=>card.addEventListener('mouseenter',()=>
    this.mouseEnter(index)))
    this.cardList.forEach((card,index)=>card.addEventListener('mouseleave',()=>
    this.mouseLeave(index)))

  }
  init(){
    this.addEvents()
  }
}


