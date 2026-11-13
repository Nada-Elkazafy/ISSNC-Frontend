const crousel = document.querySelector(".crousel");
const arrowBtns = document.querySelectorAll(".btns button");

const firstCardWidth = crousel.querySelector(".card").offsetWidth;
const crouselChildrens=[...crousel.children];

let isDragging = false, startX, startScrollLeft;

let cardPerView =Math.round(crousel.offsetWidth / firstCardWidth);

crouselChildrens.slice(-cardPerView).reverse().forEach(card => {
    crousel.insertAdjacentHTML("afterbegin",card.outerHTML);
});

crouselChildrens.slice(0,cardPerView).forEach(card =>{
    crousel.insertAdjacentHTML("beforeend",card.outerHTML);
})

arrowBtns.forEach(btn => {
    btn.addEventListener("click",() =>{
        crousel.scrollLeft +=btn.id === "left" ? -firstCardWidth:firstCardWidth;
    });
});


const dragStart =(e)=>{
    isDragging =true;
    crousel.classList.add("dragging");
    startX = e.pageX;
    startScrollLeft = crousel.scrollLeft;
}
const dragging = (e) =>{
    if(!isDragging) return;
    crousel.scrollLeft =startScrollLeft-(e.pageX -startX);
}
const dragStop = () => {
    isDragging = false;
    crousel.classList.remove("dragging");
}

 
const infiniteScroll =() => {
    if(crousel.scrollLeft === 0){
        crousel.classList.add("no-transition");
        crousel.scrollLeft=crousel.scrollWidth -(2*crousel.offsetWidth);
         crousel.classList.remove("no-transition");

    }
    else if(Math.ceil(crousel.scrollLeft) >= crousel.scrollWidth - crousel.offsetWidth){
    crousel.classList.add("no-transition");
    crousel.scrollLeft = crousel.offsetWidth;
    crousel.classList.remove("no-transition");
}

}
crousel.addEventListener("mousedown",dragStart);
crousel.addEventListener("mousemove",dragging);
document.addEventListener("mouseup",dragStop);
crousel.addEventListener("scroll",infiniteScroll);