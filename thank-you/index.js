// Hero Text
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

// create the scrollSmoother before your scrollTriggers
const smoother = ScrollSmoother.create({
    smooth: 2,               // how long (in seconds) it takes to "catch up" to the native scroll position
    effects: true,           // looks for data-speed and data-lag attributes on elements
    smoothTouch: 0.1,        // much shorter smoothing time on touch devices (default is NO smoothing on touch devices)
});


const heroText = gsap.utils.toArray(".cls-2")

let heroTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: heroText,
    start: "top bottom", // when the top of the trigger hits the top of the viewport
    scrub:true,
    end: "clamp(top 50%)",

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