'use strict'


const menuNav = document.querySelector('.Header-svg')
const ulNav = document.querySelector('.Header-ul')
const parentItems = document.querySelectorAll('.Header-li');
const subMenus = document.querySelectorAll('.Sublist-ul')

const sliderNext = document.querySelector('.Slider-arrow--next')
const sliderPrev = document.querySelector('.Slider-arrow--prev')

const sliderBtn = document.querySelectorAll('.Slider-btn')
const sliderImg = document.querySelectorAll('.Slider-img')

const slider = document.querySelector('.Slider')

const checkBtn = document.querySelector('.Offer-button')


let img = 0

//Abre el menu
menuNav.addEventListener('click' , ()=>{
    ulNav.classList.toggle('Isactive')
   
})

//Abre y cierra submenus
parentItems.forEach((parent, i) => {
    const subMenu = subMenus[i]
    
    parent.addEventListener('click', () => {
        
        subMenus.forEach((menu) => {
            if (menu !== subMenu) {
                menu.classList.remove('open')
            }
        })

        
        subMenu.classList.toggle('open');
    })
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

//evitar la navegacion con el button del formulario
checkBtn.addEventListener('click' , (event)=>{
    event.preventDefault()
    checkBtn.classList.toggle('Isactive')
})
