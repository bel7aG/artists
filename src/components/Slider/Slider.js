import React, { useEffect } from 'react'
import { slick, sliderData } from './SliderDetails'
import { ArrowForward, ArrowBackward, Block } from 'components'
import './Slider.scss'

const Slider = () => {
  useEffect(() => {
    slick()
  }, [])

  const sliderDataRender = renderWHO =>
    renderWHO === 'text'
      ? sliderData.map(({ text, key }) => (
          <div className="text-slide" key={key}>
            <h1>{text}.</h1>
          </div>
        ))
      : sliderData.map(({ imageUrl, key }) => (
          <div
            key={key}
            className="image-slide"
            id="one"
            style={{
              background: `url(${imageUrl}) no-repeat 50% 50%`,
              backgroundSize: 'cover'
            }}
          />
        ))

  return (
    <div className="slider">
      <div className="text-slider-wrapper">
        <div className="text-slider">{sliderDataRender('text')}</div>
      </div>

      <div className="slider-control">
        <div className="prev">
          <button type="button" className="arrow-btn">
            <ion-icon name="arrow-back">
              <div className="icon-inner">
                <ArrowBackward />
              </div>
            </ion-icon>
          </button>
        </div>
        <div className="next">
          <button type="button" className="arrow-btn">
            <ion-icon name="arrow-forward">
              <div className="icon-inner">
                <ArrowForward />
              </div>
            </ion-icon>
          </button>
        </div>
      </div>

      <Block className="blocks">
        <Block className="block-1" />
        <Block className="block-2" />
      </Block>

      <div className="overlay" />

      <div className="image-slider">{sliderDataRender()}</div>
    </div>
  )
}

export default Slider
