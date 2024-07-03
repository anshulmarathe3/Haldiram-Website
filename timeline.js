var menu = document.querySelector("#nav i")
var cross = document.querySelector("#full i")

var tl = gsap.timeline()

tl.to("#full",{
    right:0,
    duration:0.2,
})
tl.from("#full h4",{
    x:300,
    duration:0.2,
    stagger:0.22,
    opacity:0.3,
})
tl.from("#full i",{
    opacity:0,
})

tl.pause()

menu.addEventListener("click",function(){
    tl.play()
})

cross.addEventListener("click",function(){
    tl.reverse()
})

gsap.from("#logo",{
    x:500,
    // y:500,
    scale:4,
    duration:1.2,
})



let onSlide = false;

window.addEventListener("load", () => {
   autoSlide();

   const dots = document.querySelectorAll(".carousel_dot");
   for (let i = 0; i < dots.length; i++) {
      dots[i].addEventListener("click", () => slide(i));
   }

   const buttonPrev = document.querySelector(".carousel_button__prev");
   const buttonNext = document.querySelector(".carousel_button__next");
   buttonPrev.addEventListener("click", () => slide(getItemActiveIndex() - 1));
   buttonNext.addEventListener("click", () => slide(getItemActiveIndex() + 1));
})

function autoSlide() {
   setInterval(() => {
      slide(getItemActiveIndex() + 1);
   }, 3000); // slide speed = 3s
}

function slide(toIndex) {
   if (onSlide)
      return;
   onSlide = true;

   const itemsArray = Array.from(document.querySelectorAll(".carousel_item"));
   const itemActive = document.querySelector(".carousel_item__active");
   const itemActiveIndex = itemsArray.indexOf(itemActive);
   let newItemActive = null;

   if (toIndex > itemActiveIndex) {
      // check if toIndex exceeds the number of carousel items
      if (toIndex >= itemsArray.length) {
         toIndex = 0;
      }

      newItemActive = itemsArray[toIndex];

      // start transition
      newItemActive.classList.add("carousel_item__pos_next");
      setTimeout(() => {
         newItemActive.classList.add("carousel_item__next");
         itemActive.classList.add("carousel_item__next");
      }, 20);
   } else {
      // check if toIndex exceeds the number of carousel items
      if (toIndex < 0) {
         toIndex = itemsArray.length - 1;
      }

      newItemActive = itemsArray[toIndex];

      // start transition
      newItemActive.classList.add("carousel_item__pos_prev");
      setTimeout(() => {
         newItemActive.classList.add("carousel_item__prev");
         itemActive.classList.add("carousel_item__prev");
      }, 20);
   }

   // remove all transition class and switch active class
   newItemActive.addEventListener("transitionend", () => {
      itemActive.className = "carousel_item";
      newItemActive.className = "carousel_item carousel_item__active";
      onSlide = false;
   }, {
      once: true
   });

   slideIndicator(toIndex);
}

function getItemActiveIndex() {
   const itemsArray = Array.from(document.querySelectorAll(".carousel_item"));
   const itemActive = document.querySelector(".carousel_item__active");
   const itemActiveIndex = itemsArray.indexOf(itemActive);
   return itemActiveIndex;
}

function slideIndicator(toIndex) {
   const dots = document.querySelectorAll(".carousel_dot");
   const dotActive = document.querySelector(".carousel_dot__active");
   const newDotActive = dots[toIndex];

   dotActive.classList.remove("carousel_dot__active");
   newDotActive.classList.add("carousel_dot__active");
}

//TEXT

// function breaktext(){
//     var h1 = document.querySelector("h1")
// var h1text = h1.textContent
// var splittext = h1text.split("")
// var clutter = ""

// splittext.forEach(function(elem){
//     clutter += `<span>${elem}<span>`
// })

// h1.innerHTML = clutter
// }

// breaktext()

// var cont = document.querySelector("#cont")

// cont.addEventListener("mouseenter",function(dets){
//     gsap.from("h1 span",{
//         y:50,
//         opacity:0,
//         duration:0.8,
//         delay:0.5,
//         stagger: 0.15,
//     })
// })




// function marqanimation() {
//     window.addEventListener("wheel",function(dets){
//         if(dets.deltaY>0){
//             gsap.to(".marq",{
//                 transform:'translateX(-200%)',
//                 repeat:-1,
//                 duration:4,
//                 ease:"none",
//             })
//         }
//         else{
//             gsap.to(".marq",{
//                 transform:'translateX(0%)',
//                 repeat:-1,
//                 duration:4,
//                 ease:"none",
//             })
//         }
//     })
// }

// marqanimation()
const productContainers = [...document.querySelectorAll('.product-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})

let mybutton = document.getElementById("backToTopBtn");

window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

mybutton.onclick = function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
};


