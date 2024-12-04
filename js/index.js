'use strict'


const menuNav = document.querySelector('.Header-svg')
const ulNav = document.querySelector('.Header-ul')
const sliderNext = document.querySelector('.Slider-arrow--next')
const sliderPrev = document.querySelector('.Slider-arrow--prev')
const sliderBtn = document.querySelectorAll('.Slider-btn')
const sliderImg = document.querySelectorAll('.Slider-img')
const slider = document.querySelector('.Slider')

let img = 0


menuNav.addEventListener('click' , ()=>{
    ulNav.classList.toggle('Isactive')
})

//actualizar la imagen visible
let imagenVisible = () => {
    sliderImg.forEach((eachImg, i) => {
        sliderImg[i].classList.remove('isVisible')
        sliderBtn[i].classList.remove('isActive')
    })

    sliderImg[img].classList.add('isVisible')
    sliderBtn[img].classList.add('isActive')
}

//Funcion para avanzar automáticamente las imagenes
let autoSlide = () => {
    img++
    if (img >= sliderImg.length) {
        img = 0
    }
    imagenVisible()
}

//botón "Siguiente"
sliderNext.addEventListener('click', () => {
    img++
    if (img >= sliderImg.length) {
        img = 0
    }
    imagenVisible()
    resetAutoSlide() // Reinicia el intervalo al hacer clic
})

//botón "Anterior"
sliderPrev.addEventListener('click', () => {
    img--
    if (img < 0) {
        img = sliderImg.length - 1
    }
    imagenVisible()
    resetAutoSlide() // Reinicia el intervalo al hacer clic
})

//botones de los indicadores
sliderBtn.forEach((btn, i) => {
    btn.addEventListener('click', () => {
        img = i
        imagenVisible()
        resetAutoSlide() // Reinicia el intervalo al hacer clic
    })
})

//intervalo automático
let slideInterval = setInterval(autoSlide, 3000) // Cambia de imagen cada 3 segundos

//reiniciar el intervalo automático
let resetAutoSlide = () => {
    clearInterval(slideInterval) // Detiene el intervalo actual
    slideInterval = setInterval(autoSlide, 3000) // Inicia uno nuevo
}
