'use strict'


const menuNav = document.querySelector('.Header-svg')
const ulNav = document.querySelector('.Header-ul')
const headerItems = document.querySelectorAll('.Header-li');
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
headerItems.forEach((item) => {
    item.addEventListener('click', (event) => {
      event.stopPropagation()
  
      // Buscar el submenú dentro del item clicado
      const subMenu = item.querySelector('.Sublist-ul')
  
      // Si hay un submenú, alternar la clase 'Open'
      if (subMenu) {
        subMenu.classList.toggle('Open')
      }
  
      // Cerrar los demás submenús
      subMenus.forEach((otherSubMenu) => {
        if (otherSubMenu !== subMenu) {
          otherSubMenu.classList.remove('Open')
        }
      })
    })
  })
  
  // Cerrar todos los submenús cuando se haga clic fuera de los menús
  document.addEventListener('click', () => {
    subMenus.forEach(subMenu => {
      subMenu.classList.remove('Open')
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
