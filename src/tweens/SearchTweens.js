import { TimelineLite, Power2, TweenMax } from 'gsap'

export const openSearchTweens = artistsLength => {
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
      opacity: artistsLength ? 0 : 1,
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

export const showTween = (className, duration) => {
  TweenMax.fromTo(
    className,
    duration,
    {
      opacity: 0
    },
    {
      opacity: 1,
      ease: Power2.easeInOut
    }
  )
}

export const hideTween = (className, duration) => {
  TweenMax.fromTo(
    className,
    duration,
    {
      opacity: 1
    },
    {
      opacity: 0,
      ease: Power2.easeInOut
    }
  )
}

export const closeSearchTweens = () => {
  const closeSearchTweens = new TimelineLite()

  closeSearchTweens

    .to('.scrollbar', 0, {
      opacity: 0,
      display: 'none',
      ease: Power2.easeInOut
    })
    .to('.text-slide', 0.8, {
      opacity: 0,
      ease: Power2.easeInOut
    })
    .to('.block-1', 1.6, {
      width: '5%',
      ease: Power2.easeInOut
    })
    .to('.menu', 1.6, {
      width: 60,
      delay: -1.6,
      ease: Power2.easeInOut
    })
    .to('.search-svg', 0.46, {
      transform: 'translate(-50%, -50%) rotate(0)',
      opacity: 1,
      ease: Power2.easeInOut
    })
}
