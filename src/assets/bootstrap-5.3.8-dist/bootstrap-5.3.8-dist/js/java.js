const crousel = document.querySelector(".crousel");
const arrowBtns = document.querySelectorAll(".buttons button");

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
    else if(Math.ceil(crousel.scrollLeft) === crousel.scrollWidth - crousel.offsetWidth){
        crousel.classList.add("no-transition");
        crousel.scrollLeft = crousel.scrollWidth;
        crousel.classList.remove("no-transition");

    }
}
crousel.addEventListener("mousedown",dragStart);
crousel.addEventListener("mousemove",dragging);
document.addEventListener("mouseup",dragStop);
crousel.addEventListener("scroll",infiniteScroll);

// ---------------------SECTION4-------------------

const customers = document.querySelector(".customers");
const arrowBtn = document.querySelectorAll(".btns button");

const firstcustomerWidth = customers.querySelector(".customer").offsetWidth;
const customersChildrens = [...customers.children];

 let isDraggingCustomers = false, StartX, StartScrollLeft;

let customerPerView = Math.round(customers.offsetWidth / firstcustomerWidth);

customersChildrens.slice(-customerPerView).reverse().forEach(customer => {
    customers.insertAdjacentHTML("afterbegin", customer.outerHTML);
});

customersChildrens.slice(0, customerPerView).forEach(customer => {
    customers.insertAdjacentHTML("beforeend", customer.outerHTML);
});

arrowBtn.forEach(btn => {
    btn.addEventListener("click", () => {
        customers.scrollLeft += btn.id === "left" ? -firstcustomerWidth : firstcustomerWidth;
    });
});

const dragsStart = (e) => {
    isDraggingCustomers = true;
    customers.classList.add("dragging");
    StartX = e.pageX;
    StartScrollLeft = customers.scrollLeft;
}

const draggings = (e) => {
    if (!isDraggingCustomers) return;
    customers.scrollLeft = StartScrollLeft - (e.pageX - StartX);
}

const dragsStop = () => {
    isDraggingCustomers = false;
    customers.classList.remove("dragging");
}

const InfiniteScroll = () => {
    if (customers.scrollLeft === 0) {
        customers.classList.add("no-transition");
        customers.scrollLeft = customers.scrollWidth - (2 * customers.offsetWidth);
        customers.classList.remove("no-transition");
    }
    else if (Math.ceil(customers.scrollLeft) === customers.scrollWidth - customers.offsetWidth) {
        customers.classList.add("no-transition");
        customers.scrollLeft = customers.offsetWidth;
        customers.classList.remove("no-transition");
    }
}

customers.addEventListener("mousedown", dragsStart);
customers.addEventListener("mousemove", draggings);
document.addEventListener("mouseup", dragsStop);
customers.addEventListener("scroll", InfiniteScroll);

