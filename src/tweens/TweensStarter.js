import { TimelineLite, Power2 } from 'gsap'

const animation = new TimelineLite()

export const StarterTweens = () => {
  animation
    .to('.layer', 1.3, {
      backgroundColor: '#fff',
      ease: Power2.easeInOut
    })
    .fromTo(
      '.scrollbar',
      0,
      {
        opacity: 1,
        display: 'block'
      },
      {
        opacity: 0,
        display: 'none',
        ease: Power2.easeInOut
      }
    )

    .to('.line', 3, {
      width: '50vw',
      ease: Power2.easeIn
    })
    .to('.layer', 0.6, {
      backgroundColor: '#000',
      ease: Power2.easeInOut
    })
    .to('.line', 0, {
      backgroundColor: '#fff',
      delay: -0.3
    })
    .to('.line', 1.1, {
      top: 0,
      backgroundColor: '#fff',
      height: '100vh',
      ease: Power2.easeInOut
    })
    .to('.layer', 0.6, {
      zIndex: -1,
      opacity: 0,
      ease: Power2.easeInOut
    })
    .to('.layer', 0, {
      display: 'none',
      ease: Power2.easeInOut
    })

    .to('.image-slider ', 2, {
      y: 0,
      delay: -1.4,
      ease: Power2.easeInOut
    })

    .to('.text-slide', 0.6, {
      opacity: 1,
      ease: Power2.easeInOut
    })
    .to('.overlay ', 1, {
      width: '20.1%',
      delay: -0.6,
      ease: Power2.easeInOut
    })

    .to('.menu-burger ', 0.6, {
      height: 30,
      ease: Power2.easeInOut,
      delay: 0.3
    })
}
