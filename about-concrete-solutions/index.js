gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText)

// create the scrollSmoother before your scrollTriggers
const smoother = ScrollSmoother.create({
    smooth: 2, // how long (in seconds) it takes to "catch up" to the native scroll position
    effects: true, // looks for data-speed and data-lag attributes on elements
    smoothTouch: 0.1, // much shorter smoothing time on touch devices (default is NO smoothing on touch devices)
})

// Contact Buttons
// Hero Text

const heroText = gsap.utils.toArray('.cls-2')

let heroTimeline = gsap.timeline({
    scrollTrigger: {
        trigger: heroText,
        start: 'top 60%', // when the top of the trigger hits the top of the viewport
        scrub: true,
        end: 'clamp(top 35%)',
    },
})
let firstTimeline = gsap.timeline({})

firstTimeline.to(heroText, {
    // strokeDasharray:1100,
    strokeDashoffset: 0,
})

heroTimeline
    .to(heroText, {
        // strokeDasharray:1100,
        strokeDashoffset: 0,
    })
    .to(heroText, {
        // strokeDasharray:1100,
        strokeDashoffset: 1100,
    })

// Icon Card Animations

gsap.to('.icon-card', {
    scrollTrigger: {
        trigger: '.icon-card',
        start: 'top 90%',
        toggleActions: 'play none none reset',
    },
    clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)',
    stagger: 0.2,
    ease: Power1.easeOut,
})

// Split Text

let splitText = document.querySelector('.split')

let split = new SplitText(splitText, {
    type: 'chars, lines',
})

split.lines.forEach((target) => {
    gsap.to(target, {
        backgroundPositionX: 0,
        ease: 'none',
        scrollTrigger: {
            trigger: target,
            scrub: 1,
            start: 'top center',
            end: 'bottom center',
        },
    })
})

gsap.to('.split > div > div', {
    scrollTrigger: {
        trigger: '.split > div > div',
        start: 'top 90%',
        toggleActions: 'play none none reverse',
    },
    y: 0,
    stagger: 0.005,
})
gsap.to('.content h2', {
    scrollTrigger: {
        trigger: '.content h2',
        start: 'top 90%',
        toggleActions: 'play none none reset',
    },
    clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)',
    delay: 0.25,
    stagger: 0.2,
    ease: Power1.easeOut,
})

let URL =
    'https://h1h8xymr.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type+%3D%3D+%22teamMember%22%5D+%7C+order%28order%29+%7B+%0A++name%2C%0A++%22imgUrl%22%3A+image.asset-%3Eurl%2C%0A%7D'

// fetch the content
fetch(URL)
    .then((res) => res.json())
    .then(({ result }) => {
        const teamGrid = document.querySelector('.team-grid')
        if (result.length > 0) {
            teamGrid.innerHTML = ''
            result.forEach((result) => {
                const teamGridItem = document.createElement('div')
                teamGridItem.classList.add('team-grid-item')
                teamGrid.appendChild(teamGridItem)

                const absolute = document.createElement('p')
                absolute.classList.add('absolute')
                absolute.textContent = 'Team'
                teamGridItem.appendChild(absolute)

                const teamImage = document.createElement('img')
                teamImage.src = result.imgUrl
                teamGridItem.appendChild(teamImage)

                const teamName = document.createElement('h3')
                teamName.textContent = result.name
                teamGridItem.appendChild(teamName)
            })
            //Team grid items
            gsap.to('.team-grid-item', {
                scrollTrigger: {
                    trigger: '.team-grid-item',
                    start: 'top 90%',
                    toggleActions: 'play none none reset',
                },
                y: 'auto',
                opacity: 1,
                delay: 0.25,
                stagger: 0.2,
                ease: Power1.easeOut,
            })
        }
    })
    .catch((err) => console.error(err))

// Contact Form

let contactTimeline = gsap.timeline({
    scrollTrigger: {
        trigger: '.blur',
        start: 'top center',
        toggleActions: 'play none none reset',
    },
})

contactTimeline
    .to('.blur', {
        opacity: 1,
        ease: Power1.easeOut,
        duration: 0.5,
    })

    .to(
        ' .blur p, .blur h2, .blur button',
        {
            clipPath: 'polygon(0 0, 120% 0, 100% 100%, 0% 100%)',
            stagger: 0.3,
            ease: Power1.easeOut,
            duration: 0.5,
        },
        0.5
    )

// Dropdown

const menuOpen = document.querySelector('.open')
const menuClose = document.querySelector('.close')
const overlay = document.querySelector('.overlay')
const contactPress = document.querySelector('nav .contact-button')
const menuLinks = document.querySelectorAll('.overlay ul a')
const allContent = document.querySelector('body')

var timeline = gsap.timeline({
    defaults: { duration: 0.1, ease: Back.easeOut.config(1) },
})

timeline.paused(true)

timeline
    .to('.overlay', {
        clipPath: 'polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)',
        opacity: 1,
    })
    .to('.overlay', {
        clipPath: 'polygon(0 0, 100% 0%, 100% 100%, 0% 100%)',
        opacity: 1,
    })
menuOpen.addEventListener('click', () => {
    timeline.play()
    contactPress.style.pointerEvents = 'none'
    contactPress.style.display = 'none'
    allContent.style.overflow = 'hidden'
})

menuClose.addEventListener('click', () => {
    timeline.reverse(0.5)
    contactPress.style.pointerEvents = 'all'
    contactPress.style.display = 'flex'
    allContent.style.overflow = 'visible'
})

const scrollIcon = document.querySelectorAll('.scroll-icon')

scrollIcon.forEach((icon) => {
    icon.addEventListener('click', () => {
        smoother.scrollTo('#next-section', true, 'top top')
    })
})
