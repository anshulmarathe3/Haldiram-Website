var menu = document.querySelector("#nav i")
var cross = document.querySelector("#full i")

var tl = gsap.timeline()

tl.to("#full",{
    right:0,
    duration:0.5,
})
tl.from("#full h4",{
    x:300,
    duration:0.35,
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


