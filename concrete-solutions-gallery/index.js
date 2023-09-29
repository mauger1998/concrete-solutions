gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

// create the scrollSmoother before your scrollTriggers
const smoother = ScrollSmoother.create({
    smooth: 2, // how long (in seconds) it takes to "catch up" to the native scroll position
    effects: true, // looks for data-speed and data-lag attributes on elements
    smoothTouch: 0, // much shorter smoothing time on touch devices (default is NO smoothing on touch devices)
})

// Hero Text

let mm = gsap.matchMedia()

const heroText = gsap.utils.toArray('.cls-2')

mm.add('(min-width: 1350px)', () => {
    let heroTimeline = gsap.timeline({
        scrollTrigger: {
            trigger: heroText,
            start: 'top bottom', // when the top of the trigger hits the top of the viewport
            scrub: true,
            end: 'clamp(top 55%)',
        },
    })
    let firstTimeline = gsap.timeline({})

    firstTimeline.to(heroText, {
        // strokeDasharray:1100,
        strokeDashoffset: 0,
    })

    heroTimeline
        .to(heroText, {
            // strokeDasharray:1200,
            strokeDashoffset: 0,
        })
        .to(heroText, {
            // strokeDasharray:1100,
            strokeDashoffset: 1200,
        })

    return () => {}
})
mm.add('(max-width: 1349px)', () => {
    let heroTimeline = gsap.timeline({
        scrollTrigger: {
            trigger: heroText,
            start: 'top bottom', // when the top of the trigger hits the top of the viewport
            scrub: true,
            end: 'clamp(top 50%)',
        },
    })
    let firstTimeline = gsap.timeline({})

    firstTimeline.to(heroText, {
        // strokeDasharray:1100,
        strokeDashoffset: 0,
    })

    heroTimeline
        .to(heroText, {
            // strokeDasharray:1200,
            strokeDashoffset: 0,
        })
        .to(heroText, {
            // strokeDasharray:1100,
            strokeDashoffset: 1200,
        })

    return () => {}
})

let URL =
    'https://h1h8xymr.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type+%3D%3D+%22projects%22%5D+%7C+order%28order%29+%7B+%0A++projectName%2C%0A++%22imgUrlOne%22%3A+imageOne.asset-%3Eurl%2C%0A++%22imgUrlTwo%22%3A+imageTwo.asset-%3Eurl%2C%0A%7D'

// fetch the content
fetch(URL)
    .then((res) => res.json())
    .then(({ result }) => {
        const projectGrid = document.querySelector('.projects-grid')
        if (result.length > 0) {
            projectGrid.innerHTML = ''
            result.forEach((result) => {
                const projectGridItemOne = document.createElement('div')
                projectGridItemOne.classList.add('projects-grid-item')
                projectGrid.appendChild(projectGridItemOne)

                const projectGridItemTwo = document.createElement('div')
                projectGridItemTwo.classList.add('projects-grid-item')
                projectGrid.appendChild(projectGridItemTwo)

                const absolute = document.createElement('p')
                absolute.classList.add('absolute')
                absolute.textContent = 'Projects'
                projectGridItemOne.appendChild(absolute)

                const absoluteTwo = document.createElement('p')
                absoluteTwo.classList.add('absolute')
                absoluteTwo.textContent = 'Projects'
                projectGridItemTwo.appendChild(absoluteTwo)

                const projectImageOne = document.createElement('img')
                projectImageOne.src = result.imgUrlOne
                projectGridItemOne.appendChild(projectImageOne)

                const projectImageTwo = document.createElement('img')
                projectImageTwo.src = result.imgUrlTwo
                projectGridItemTwo.appendChild(projectImageTwo)

                const projectNameOne = document.createElement('h3')
                projectNameOne.textContent = result.projectName
                projectGridItemOne.appendChild(projectNameOne)

                const projectNameTwo = document.createElement('h3')
                projectNameTwo.textContent = result.projectName
                projectGridItemTwo.appendChild(projectNameTwo)
            })

            //Team grid items
            gsap.to('.projects-grid-item', {
                scrollTrigger: {
                    trigger: '.projects-grid-item',
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

let URLTWO =
    'https://h1h8xymr.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type+%3D%3D+%22galleryImages%22%5D%7B+%0A%0A++%22imgUrl%22%3A+image.asset-%3Eurl%2C%0A%7D'

// fetch the content
fetch(URLTWO)
    .then((res) => res.json())
    .then(({ result }) => {
        let gallery = document.querySelector('.swiper')

        if (result.length > 0) {
            gallery.innerHTML = ''
            const swiperWrapper = document.createElement('div')
            swiperWrapper.classList.add('swiper-wrapper')
            gallery.appendChild(swiperWrapper)

            result.forEach((result) => {
                const swiperSlide = document.createElement('div')
                swiperSlide.classList.add('swiper-slide')
                swiperWrapper.appendChild(swiperSlide)

                const swiperImage = document.createElement('img')
                swiperImage.src = result.imgUrl
                swiperSlide.appendChild(swiperImage)
            })
            ScrollTrigger.refresh()
            const swiperPagination = document.createElement('div')
            swiperPagination.classList.add('swiper-pagination')
            gallery.appendChild(swiperPagination)

            const swiperNext = document.createElement('div')
            swiperNext.classList.add('swiper-button-next')
            gallery.appendChild(swiperNext)

            const swiperNextImage = document.createElement('img')
            swiperNextImage.src = '../public/right-arrow-next-svgrepo-com.svg'
            swiperNext.appendChild(swiperNextImage)

            const swiperPrev = document.createElement('div')
            swiperPrev.classList.add('swiper-button-prev')
            gallery.appendChild(swiperPrev)

            const swiperPrevImage = document.createElement('img')
            swiperPrevImage.src = '../public/left-arrow-next-svgrepo-com.svg'
            swiperPrev.appendChild(swiperPrevImage)

            const swiperScroll = document.createElement('div')
            swiperScroll.classList.add('swiper-scrollbar')
            gallery.appendChild(swiperScroll)

            // Swiper

            const swiper = new Swiper('.swiper', {
                // Optional parameters
                direction: 'horizontal',
                spaceBetween: 10,
                loop: true,
                slidesPerView: 1.2,
                centeredSlides: true,

                // // If we need pagination
                // pagination: {
                //   el: '.swiper-pagination',
                // },

                // Navigation arrows
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
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
const allContent = document.querySelector('html')

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
