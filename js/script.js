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
