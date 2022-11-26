import debounce from '../helper/debounce.js'
export default function slider() {
  const sliders = document.querySelectorAll('.slide')
  const sliderContent = document.querySelector('.slider-content')
  const next = document.querySelector('.next')
  const prev = document.querySelector('.prev')
  const containerSlider = document.querySelector('.slider-container')
  let size = containerSlider.getBoundingClientRect().width
  let current = 0
  let count = 0
  let infinite = false
  let validateSliderActive

  window.onload = ()=> {
    sliderActive()
  }

  const activeInfiniteSliderOnScroll = debounce(sliderActive,150)
  const calcResize = debounce(resizeElement,300)


  function sliderActive(){
    const active = document.querySelector('.projeto').classList.contains('active')
    if (active && !validateSliderActive) {
      sliderContent.style.opacity = 1
      validateSliderActive = true
      infinite = true
      infiniteSliderScroll()
    } else if (!active) {
      sliderContent.style.opacity = 0
      infinite = false
      validateSliderActive = false
      current = 0
      count = 0
      sliderContent.style.transform = 'translateX(0px)'
    }
  }


  function resizeElement  (){
    size = sliderContent.getBoundingClientRect().width
    sliders.forEach(item => {
      item.style.width = `${(size * 80) / 100}px`
      item.style.marginInline = `${(size * 10) / 100}px`
    })
    sliderContent.style.transform = `translateX(-${size * current}px)`
    
  }
  const nextSlide = () => {
    infinite = false
    if (current < sliders.length - 1) {
      current = current + 1
      sliderContent.style.transform = `translateX(-${size * current}px)`
    }
  }
  const prevSlide = () => {
    infinite = false
    if (current > 0) {
      current = current - 1
      sliderContent.style.transform = `translateX(-${size * current}px)`
    }
  }

  function infiniteSliderScroll(){
    const loop = setInterval(() => {
      !infinite ? clearInterval(loop) : ''
      if (count < sliders.length - 1 && infinite) {
        count++
        current++
        sliderContent.style.transform = `translateX(-${size * count}px)`
      } else if (infinite){
        sliderContent.style.opacity = 0
        setTimeout(() => {
          sliderContent.style.opacity = 1
        }, 1500)
        sliderContent.style.transform = 'translateX(0px)'
        count = 0
        current = 0
      }
    }, 3000)
  }






  next.addEventListener('click', nextSlide)
  prev.addEventListener('click', prevSlide)
  sliderContent.addEventListener('click', () => (infinite = false))
  window.addEventListener('resize', calcResize)
  window.addEventListener('scroll',activeInfiniteSliderOnScroll)
}
