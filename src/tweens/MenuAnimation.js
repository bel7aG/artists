import { TimelineLite, Power2, Elastic, TweenMax } from 'gsap'

export const openMenuAnimation = () => {
  TweenMax.to('.scrollbar', 0.4, {
    opacity: 0,
    ease: Power2.easeNone
  })
  TweenMax.to('.scrollbar', 0, {
    display: 'none',
    delay: 0.42
  })

  const menuAnimation = new TimelineLite()
  menuAnimation
    .to('.search-svg', 0.3, {
      opacity: 0,
      ease: Power2.easeInOut
    })
    .to('.menu-layer', 1.6, {
      height: '100%',
      ease: Power2.easeInOut
    })
    .to('.menu-burger__item', 0.6, {
      backgroundColor: '#000',
      delay: -2.4
    })
    .to('.menu-burger__item-2', 1.37, {
      transform: 'translateY(-120vh)',
      delay: -1.8,
      ease: Power2.easeInOut
    })
    .to('.menu', 1.8, {
      width: '100%',
      zIndex: 50,
      ease: Power2.easeInOut
    })

    .to('.menu-burger', 2.3, {
      top: 30,
      delay: -1.72,
      ease: Elastic.easeInOut
    })
    .to('.menu-burger__item-1', 0.3, {
      transform: 'rotate(35deg)',
      left: '50%',
      delay: -0.8
    })
    .to('.menu-burger__item-3', 0.3, {
      transform: 'rotate(-35deg)',
      right: '50%',
      top: '25%',
      delay: -0.8
    })
    .fromTo(
      '.menu-items-wrapper',
      0.99,
      {
        opacity: 0,
        y: 100,
        display: 'none'
      },
      {
        opacity: 1,
        delay: -0.7,
        y: 0,
        display: 'block',
        ease: Power2.easeInOut
      }
    )
}

export const closeMenuAnimation = () => {
  TweenMax.to('.block-1', 0, {
    width: '5%',
    ease: Power2.easeInOut
  })
  const menuAnimation = new TimelineLite()
  menuAnimation
    .to('.menu-items-wrapper', 0.8, {
      opacity: 0,
      y: 100,
      ease: Power2.easeInOut
    })
    .to('.menu-items-wrapper', 0, {
      display: 'none',
      ease: Power2.easeInOut
    })
    .to('.menu', 0.9, {
      width: 60,
      ease: Power2.easeInOut
    })
    .to('.menu-layer', 0.7, {
      height: 0,
      ease: Power2.easeInOut
    })

    .to('.menu-burger__item', 0.3, {
      backgroundColor: '#fff',
      delay: -0.98
    })
    .to('.menu-burger__item-1', 0.3, {
      transform: 'rotate(0)',
      delay: -2.28,
      left: 14
    })
    .to('.menu-burger__item-3', 0.3, {
      transform: 'rotate(0)',
      right: 14,
      delay: -2.28,
      top: 0
    })
    .to('.menu-burger', 2, {
      top: window.innerHeight - 70,
      delay: -1.28,
      ease: Elastic.easeInOut
    })

    .to('.search-svg', 0.56, {
      opacity: 1,
      transform: 'translate(-50%, -50%) rotate(0)',
      ease: Power2.easeInOut
    })
    .fromTo(
      '.menu-burger__item-2',
      1.4,
      {
        height: '0',
        y: 0
      },
      {
        height: '60%',
        delay: -0.97,
        ease: Power2.easeInOut
      }
    )
    .to('.text-slide', 0.8, {
      opacity: 1,
      ease: Power2.easeInOut
    })
}
