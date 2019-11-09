import $ from 'jquery'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel'

const slickConfig = (asNavFor, centerMode, slidesToShow, slidesToScroll) => ({
  autoplay: true,
  autoplaySpeed: 2400,
  slidesToShow,
  slidesToScroll,
  speed: 1800,
  cssEase: 'cubic-bezier(.84, 0, .08, .99)',
  asNavFor,
  centerMode,
  prevArrow: $('.prev'),
  nextArrow: $('.next')
})
export const slick = () => {
  $('.image-slider')
    .not('.slick-initialized')
    .slick(slickConfig('.text-slider', true, 2, 1))

  $('.text-slider')
    .not('.slick-initialized')
    .slick(slickConfig('.image-slider', false, 1, 1))
}

export const sliderData = [
  {
    key: '0',
    text: `Headset`,
    imageUrl: `https://images.unsplash.com/photo-1467196271131-42c8c8499d72?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1368&q=80`
  },
  {
    key: '1',
    text: `music`,
    imageUrl: `https://images.unsplash.com/photo-1497032205916-ac775f0649ae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80`
  },
  {
    key: '2',
    text: `Life`,
    imageUrl: `https://images.unsplash.com/photo-1528190303099-2408e63c79e3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1344&q=80`
  },
  {
    key: '3',
    text: `Microphone`,
    imageUrl: `https://images.unsplash.com/photo-1531651008558-ed1740375b39?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80`
  },
  {
    key: '4',
    text: `Beats`,
    imageUrl: `https://images.unsplash.com/photo-1569184475970-80ac8ae02895?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80`
  }
]
