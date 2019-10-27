import { TimelineLite, Power2 } from 'gsap'

export default () => {
  const animation = new TimelineLite()
  animation
    .to('.scrollbar', 0, {
      opacity: 0,
      display: 'none',
      ease: Power2.easeInOut
    })
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
    .to('.block-1, .block-2, .menu', 1, {
      y: 0
    })
    .to('.image-slider ', 2, {
      y: 0,
      delay: -1.4,
      ease: Power2.easeInOut
    })
    .to('.overlay ', 1, {
      width: '21%',
      delay: -0.6,
      ease: Power2.easeInOut
    })

    .to('.menu-burger ', 0.6, {
      height: 30,
      ease: Power2.easeInOut,
      delay: 0.3
    })
}
