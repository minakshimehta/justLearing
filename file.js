$(function(){
    $(".bottom-nav").on("click", function(){
    if($(".menu").hasClass("active")){
        $(".menu").removeClass("active");
        $(this).find("a").html("<ion-icon name='menu-outline'></ion-icon>");
    }else{
        $(".menu").addClass("active");
        $(this).find("a").html("<ion-icon name='close-outline'></ion-icon>");
    }
    });
    });
    let slideIndex = 0;
showSlides();

function nextSlide() {
  slideIndex++;
  showSlides();
  timer = _timer; // reset timer
}

function prevSlide() {
  slideIndex--;
  showSlides();
  timer = _timer;
}

function currentSlide(n) {
  slideIndex = n - 1;
  showSlides();
  timer = _timer;
}

function showSlides() {
  let slides = document.querySelectorAll(".mySlides");
  let dots = document.querySelectorAll(".dots");

  if (slideIndex > slides.length - 1) slideIndex = 0;
  if (slideIndex < 0) slideIndex = slides.length - 1;
  
  // hide all slides
  slides.forEach((slide) => {
    slide.style.display = "none";
  });
  
  // show one slide base on index number
  slides[slideIndex].style.display = "block";
  
  dots.forEach((dot) => {
    dot.classList.remove("active");
  });
  
  dots[slideIndex].classList.add("active");
}

let timer = 7; // sec
const _timer = timer;

setInterval(() => {
  timer--;

  if (timer < 1) {
    nextSlide();
    timer = _timer; // reset timer
  }
}, 1000); // 1sec