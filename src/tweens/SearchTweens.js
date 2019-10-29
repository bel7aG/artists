import { TimelineLite, Power2, Elastic } from 'gsap'

export const openSearchTweens = () => {
  const searchAnimation = new TimelineLite()
  searchAnimation
    .to('.text-slide', 0.8, {
      opacity: 0,
      ease: Power2.easeInOut
    })
    .to('.block-1', 1.6, {
      width: '100%',
      ease: Power2.easeInOut
    })
    .to('.menu', 1.6, {
      width: '100%',
      delay: -1.6,
      ease: Power2.easeInOut
    })
    .to('.search-svg', 0.46, {
      transform: 'translate(-50%, -50%) rotate(90deg)',
      ease: Power2.easeInOut
    })
    .fromTo(
      '.scrollbar',
      2,
      {
        opacity: 0,
        display: 'none'
      },
      {
        opacity: 1,
        display: 'block',
        ease: Power2.easeInOut
      }
    )
}

const searchAnimation = new TimelineLite()
export const load = duration => {
  searchAnimation
    .to('.search-svg-box', 1, {
      transform: 'translate(-50%, -50%) rotate(-90deg) scale(1)',
      ease: Elastic.easeInOut
    })
    .to('.search-svg-box', duration - 1, {
      transform: 'translate(-50%, -50%) rotate(4230deg) scale(1)',
      ease: Elastic.easeInOut
    })
}

export const unload = () => {
  searchAnimation.to('.search-svg-box', 1, {
    transform: 'translate(-50%, -50%) rotate(-90deg) scale(0)',
    ease: Power2.easeInOut
  })
}
