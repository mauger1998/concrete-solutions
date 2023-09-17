gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

// create the scrollSmoother before your scrollTriggers
const smoother = ScrollSmoother.create({
    smooth: 2,               // how long (in seconds) it takes to "catch up" to the native scroll position
    effects: true,           // looks for data-speed and data-lag attributes on elements
    smoothTouch: 0.1,        // much shorter smoothing time on touch devices (default is NO smoothing on touch devices)
});


// Swiper 

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    spaceBetween:50,
    loop:true,
    centeredSlides:true,
  
    // // If we need pagination
    // pagination: {
    //   el: '.swiper-pagination',
    // },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // // And if we need scrollbar
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
  });

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
  // strokeDasharray:1200,
  strokeDashoffset:0,
})
.to(heroText, {
  // strokeDasharray:1100,
  strokeDashoffset:1200,

})