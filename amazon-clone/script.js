const imges = document.querySelectorAll(".header-slider ul img");
const next_btn = document.querySelector(".control_next");
const prev_btn = document.querySelector(".control_prev");


let n = 0;

function changeSlide (){
    for( let i = 0 ; i < imges.length ; i++){
        imges[i].style.display = "none";
    }
    imges[n].style.display = "block";
}
changeSlide()

prev_btn.addEventListener("click", (e)=>{
    if ( n > 0){
        n--;
    }else{
        n = imges.length - 1

    }
    changeSlide()

})
next_btn.addEventListener("click", (e)=>{
    if ( n < imges.length - 1){
        n++;
    }else{
        n = 0

    }
    changeSlide()

})

const sliderContainer = document.querySelectorAll ('.products');
for (const item of sliderContainer){
    item.addEventListener("wheel", (e)=>{
        e.preventDefault()
        item.scrollLeft += e.deltaY
    })
}