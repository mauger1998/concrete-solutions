gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

// create the scrollSmoother before your scrollTriggers
const smoother = ScrollSmoother.create({
    smooth: 2,               // how long (in seconds) it takes to "catch up" to the native scroll position
    effects: true,           // looks for data-speed and data-lag attributes on elements
    smoothTouch: 0.1,        // much shorter smoothing time on touch devices (default is NO smoothing on touch devices)
});

// Contact Buttons
// Hero Text


const heroText = gsap.utils.toArray(".cls-2")

let heroTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: heroText,
    start: "clamp(top center)", // when the top of the trigger hits the top of the viewport
    scrub:true,
    end: "clamp(top 40%)",

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


// Icon Card Animations

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



// Split Text

let splitText = document.querySelector(".split")

let split = new SplitText(splitText, {
    type:"chars, lines", 
})

gsap.to(".split > div > div",{
    scrollTrigger: {
        trigger:".split > div > div",
        start:"top 90%",
        toggleActions: "play none none reset",

        
    },
    duartion:"0.001s",
    y:0,
    stagger:0.02,
})
gsap.to(".content h3", {
    scrollTrigger: {
      trigger:".content h3",
      start:"top 90%",
      toggleActions: "play none none reset",
  
  
    }, 
    clipPath:"polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
    delay:0.25,
    stagger:0.2,
    ease: 
  Power1.
  easeOut,
})