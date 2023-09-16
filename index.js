gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

// create the scrollSmoother before your scrollTriggers
const smoother = ScrollSmoother.create({
    smooth: 2,               // how long (in seconds) it takes to "catch up" to the native scroll position
    effects: true,           // looks for data-speed and data-lag attributes on elements
    smoothTouch: 0.1,        // much shorter smoothing time on touch devices (default is NO smoothing on touch devices)
});

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

selectorButtons.forEach((button, index) => {
  button.addEventListener("mouseenter", (e) => {
    selectorImages[index].classList.add("active")
  })
  button.addEventListener("mouseleave", (e) => {
    selectorImages[index].classList.remove("active")
  })
})







  const text = gsap.utils.toArray(".cls-1")

  let tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".animations-section svg",
        start:"center center",
        scrub:2,
        end:"+=1000px",
    }
  })

  let heroTimeline = gsap.timeline({

  })

  heroTimeline.to(".right-column-top-left img", {
    clipPath:"polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
    ease: 
    Power4.
    easeInOut,
  })
  .to(".left-column-item:nth-child(2) img", {
    clipPath:"polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
    ease: 
    Power4.
    easeInOut,
  }, 0.15 )
  .to(".right-column-bottom img", {
    clipPath:"polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
    ease: 
    Power4.
    easeInOut,
  }, 0.3)
  
  .to(".left-column-item:not(:nth-child(2))", {
    clipPath:"polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
    ease: 
    Power4.
    easeInOut,
  },0.5 )
  .to(".hero-card", {
    opacity:1,
    y:0,
    stagger:0.2,
    ease: 
    Power1.
    easeInOut,
  }, 1.2)
  .to(".hero-card-alternate", {
    opacity:1,
    y:0,
    stagger:0.2,
    ease: 
    Power1.
    easeInOut,
  }, 1.4)

  gsap.to(".animations-section svg", {
    scrollTrigger: {
      trigger: ".animations-section svg",
      start: "center center", // when the top of the trigger hits the top of the viewport
      pin:true,
      scrub:true,
      end:"+=1200",
      
  
    },
    ease: 
    Power1.
    easeInOut,
    // stagger:0.1,
  
  });


  tl.to(text, {
    // strokeDasharray:1100,
    strokeDashoffset:0,
    // duration:1.5,
  })
  .to(text, {
    // strokeDasharray:1100,
    strokeDashoffset:1100,
    delay:2,
    // duration:1.5,
  })