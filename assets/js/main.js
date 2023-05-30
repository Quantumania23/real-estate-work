/* CHANGE BACKGROUND HEADER */
function scrollHeader (){
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    this.scrollY >= 50 ? header.classList.add('scroll-header') 
                       : header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/* SWIPER POPULAR */
let swiperPopular = new Swiper(".popular__container", {
    spaceBetween:32,
    grabCursor:true,
    centredSlides:true,   
    slidesPerView:'auto',
    loop:true,

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

/* VALUE */
const accordingItems = document.querySelectorAll('.value__according-item')

accordingItems.forEach((item) => {
    const accordingHeader =item.querySelector('.value__according-icon')

    accordingHeader.addEventListener('click', () => {
        const openItem = document.querySelector('.according-open')
        toggleItem(item)

        if (openItem && openItem!== item){
            toggleItem(openItem)
        }
    })
})

const toggleItem = (item) => {
    const accordingContent = item.querySelector('value__according-content')

    if(item.classList.contains('according-open')){
        accordingContent.removeAttribute('style')
        item.classList.remove('according-open')
    } else{
        accordingContent.style.height = accordingContent.scrollHeight + 'px'
        item.classList.add('according-open')
    }

}

/* SCROLL SECTIONS ACTIVE LINK */


/* SHOW SCROLL UP */ 


/* DARK LIGHT THEME */ 


/* SCROLL REVEAL ANIMATION */
