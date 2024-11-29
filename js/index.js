'use strict'


const sliderNext = document.querySelector('.Slider-arrow--next')
const sliderPrev = document.querySelector('.Slider-arrow--prev')
const sliderBtn = document.querySelectorAll('.Slider-btn')
const sliderImg = document.querySelectorAll('.Slider-img')



let img = 0

let imagenVisible = ()=>{
    sliderImg.forEach(( eachImg , i)=>{
        sliderImg[i].classList.remove('isVisible')
        sliderBtn[i].classList.remove('isActive')
    })

        sliderImg[img].classList.add('isVisible')
        sliderBtn[img].classList.add('isActive')
}

sliderNext.addEventListener(`click` , ()=>{
    img++
    if( img >= 5){
        img = 0
    }
    imagenVisible()
})

sliderPrev.addEventListener(`click` , ()=>{
    img--
    if(img < 0 ){
        img = 4
    }
    imagenVisible()
})

sliderBtn.forEach( (i)=>{
    sliderBtn[i].addEventListener(`click` , ()=>{
        img = i
        imagenVisible()
    })
})