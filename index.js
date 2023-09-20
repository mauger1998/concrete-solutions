gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

let mm = gsap.matchMedia();



// create the scrollSmoother before your scrollTriggers
const smoother = ScrollSmoother.create({
    smooth: 2,               // how long (in seconds) it takes to "catch up" to the native scroll position
    effects: true,           // looks for data-speed and data-lag attributes on elements
    smoothTouch: 0,        // much shorter smoothing time on touch devices (default is NO smoothing on touch devices)
});




window.onload = (event) => {
  console.log("page is fully loaded");

  let urlHash = window.location.href.split("#")[1];

  let scrollElem = document.querySelector("#" + urlHash);

  console.log(scrollElem, urlHash);

  if (urlHash && scrollElem) {
    gsap.to(smoother, {
      scrollTop: smoother.offset(scrollElem, "top top"),
      duration: 1,
      delay: 0.5
    });
  }
};

// Contact Buttons

const contactButton = document.querySelectorAll(".contact-button")

contactButton.forEach((button) => {
  button.addEventListener("click", () => {
    smoother.scrollTo("#contact", true, "top top" )
  })
})


// Selector

const selectorImages = document.querySelectorAll(".selector-images img")
const selectorButtons = document.querySelectorAll(".selector-button")
const answers = document.querySelectorAll(".answer")
const questions = document.querySelectorAll(".question")
const selectorTitles = document.querySelectorAll(".question h3")



  selectorButtons.forEach((button, index) => {
  button.addEventListener("click", (e) => {
    for (let button of selectorButtons) {
      button.classList.remove("active");
    }
    for (let image of selectorImages) {
      image.classList.remove("active");
    }
    button.classList.toggle("active");
    selectorImages[index].classList.add("active")
  })

})











// Hero Text

const heroText = gsap.utils.toArray(".cls-2")

let heroTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: heroText,
    start: "top bottom", // when the top of the trigger hits the top of the viewport
    scrub:true,
    end: "clamp(top center)",
  },
})
let firstTimeline = gsap.timeline({

})

firstTimeline.to(heroText, {
  // strokeDasharray:1100,
  strokeDashoffset:0,
})

heroTimeline.to(heroText, {
  // strokeDasharray:1100,
  strokeDashoffset:0,
})
.to(heroText, {
  // strokeDasharray:1100,
  strokeDashoffset:1100,

})


// gsap.to(heroText, {
  
//   strokeDashoffset:1100,

// });

gsap.to(".icon-card", {
  scrollTrigger: {
    trigger:".icon-card",
    start:"top 90%",
    toggleActions: "play none none reset",


  }, 
  clipPath:"polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
  stagger:0.2,
  ease: 
Power1.
easeOut,
})


gsap.to(".selector-button", {
  scrollTrigger: {
    trigger:".selector-button",
    start:"top 90%",
    toggleActions: "play none none reset",


  }, 
  y:0,
  opacity:1,
  stagger:0.2,
  ease: 
Power1.
easeOut,
})


// Contact Form

let contactTimeline = gsap.timeline({ scrollTrigger: {
  trigger:".contact-form",
  start:"top center",
  toggleActions: "play none none reset",

},})

contactTimeline.to(".contact-form", {
  opacity:1,
  ease: 
  Power1.
  easeOut,
  duration:0.5,
})


.to(" .contact-form form, .contact-form h3", {
  clipPath:"polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
  stagger:0.3,
  ease: 
  Power1.
  easeOut,
  duration:0.5,
}, 0.5)










// Dropdown

const menuOpen = document.querySelector(".open")
const menuClose = document.querySelector(".close")
const overlay = document.querySelector(".overlay")
const contactPress = document.querySelector(" nav .contact-button")
const menuLinks = document.querySelectorAll(".overlay ul a")
const allContent = document.querySelector("html")
const testingButton = document.querySelector(".testing-button")


var timeline = gsap.timeline({defaults:{duration: 1, ease: Back.easeOut.config(2)}})

timeline.paused(true)

timeline.to(".overlay", {clipPath: "circle(100%)", "opacity":1,})

menuOpen.addEventListener("click", () => {
  timeline.play()
  contactPress.style.pointerEvents = "none"
  contactPress.style.display = "none"
  allContent.style.overflow = "hidden"

  testingButton.addEventListener("click", (e) => {
    timeline.reverse(.5)
    smoother.scrollTo("#contact", true, "top top" )
    allContent.style.overflow = "visible"

  })

  
   
})

  


  

  


menuClose.addEventListener("click", () => {
  timeline.reverse(.5)
  contactPress.style.pointerEvents = "all"
  contactPress.style.display = "flex"
  allContent.style.overflow = "visible"


})
