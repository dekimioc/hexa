var mySwiper = new Swiper ('.container-1', {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      }
    })

var secondSwiper = new Swiper ('.sc-1', {
  spaceBetween: 50,
  loop: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  }
})
