// Testimonios
document.addEventListener('DOMContentLoaded', function () {
    if (window.innerWidth <= 768) return;

    const sliderTst = document.getElementById('testimonial-slider');
    const cards = sliderTst.querySelectorAll('.testimonial-card');
    const dots = document.querySelectorAll('.dot');

    let currentIndex = 0;
    const cardsPerView = 3;

    function updateSlider() {
        const card = cards[0];
        const cardWidth = card.offsetWidth + 20; 
        const offset = cardWidth * currentIndex;

        sliderTst.style.transform = `translateX(-${offset}px)`;

        dots.forEach(dot => dot.classList.remove('active'));
        const activeDotIndex = Math.floor(currentIndex / 1); 
        if (dots[activeDotIndex]) {
        dots[activeDotIndex].classList.add('active');
        }
    }

    dots.forEach(dot => {
        dot.addEventListener('click', () => {
        currentIndex = parseInt(dot.getAttribute('data-index'));
        updateSlider();
        });
    });

  updateSlider();
});


// Navbar
window.addEventListener("scroll", function() {
    const navbar = document.querySelector(".menu-section");
    if (window.scrollY > 100) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

// header

const botonLeft= document.querySelector(".swiper-button-prev"); 
const botonRight= document.querySelector(".swiper-button-next");
const slider= document.querySelector("#swiper-wrapper");
const sliderSection= document.querySelectorAll(".swiper-slide");

botonLeft.addEventListener('click',moveToLeft);
botonRight.addEventListener('click',moveToRight);

let numSlider= sliderSection.length;
let numOperacion=0;
let anchoSlider= 100/numSlider;
console.log(anchoSlider);

setInterval(()=>{
    moveToRight()
},10000)

function moveToRight(){
    if(numOperacion<numSlider-1){
        numOperacion++;
        slider.style.transition= "all ease .6s"
    }else {
        numOperacion=0;
        slider.style.transition= "none";
    }
    let porcentajeTransladar=-numOperacion*anchoSlider;
    slider.style.transform= `translate(${porcentajeTransladar}%)`;
    
}

function moveToLeft(){
    if(numOperacion>0){
        numOperacion--;
        slider.style.transition= "all ease .6s"
    }else{
        numOperacion=numSlider-1;
        slider.style.transition= "none";
    }
    let porcentajeTransladar=-numOperacion*anchoSlider;
   slider.style.transform=`translate(${porcentajeTransladar}%)`
}

//Brand Section
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight)
    );
}

const brandSection = document.querySelector('.brand-content');

    window.addEventListener('scroll', function () {
    if (isInViewport(brandSection)) {
        brandSection.classList.add('animate');
    }
});
