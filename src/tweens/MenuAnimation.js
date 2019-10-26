import { TimelineLite, Power2, Elastic } from 'gsap'

export const openMenuAnimation = async () => {
  const menuAnimation = new TimelineLite()
  await menuAnimation
    .to('.block-3__white', 1.1, {
      height: '100%',
      ease: Power2.easeInOut
    })
    .to('.menu-burger__item', 0.6, {
      backgroundColor: '#000',
      delay: -1.9
    })
    .to('.menu-burger__item-2', 0.77, {
      transform: 'translateY(-120vh)',
      delay: -1.8,
      ease: Power2.easeInOut
    })
    .to('.block-3', 0.9, {
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
    .to('.scrollbar', 1.2, {
      opacity: 1,
      ease: Power2.easeInOut
    })
}

export const closeMenuAnimation = async () => {
  const menuAnimation = new TimelineLite()
  await menuAnimation
    .to('.scrollbar', 0.9, {
      opacity: 0,
      ease: Power2.easeInOut
    })
    .to('.block-3', 0.9, {
      width: 60,
      ease: Power2.easeInOut
    })
    .to('.block-3__white', 0.7, {
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
}
