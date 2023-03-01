const optionsSlider =  () => {
    let optionsSlider = []
    const optionsSlider1 = {
    name:'.mySwiper',
    loop:'true',
    effect: 'flip',
    pagination: {
    el: '.swiper-pagination',
    clickable: true
    }
    }

    const optionsSlider2 ={
    name:'.skillSwiper',
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
    }

    optionsSlider.push(optionsSlider1)
    optionsSlider.push(optionsSlider2)
    return optionsSlider
}
export const createSwiperSlider = () => {
    const options =  optionsSlider()
    options.forEach(item =>new Swiper(item.name,item))
}

  