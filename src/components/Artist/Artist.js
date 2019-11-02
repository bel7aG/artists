import React from 'react'
import PropTypes from 'prop-types'
import { SArtist, SButton } from './SArtist'
import { Image } from 'components'
import Rating from 'react-rating'
import { FavoritSVG } from 'components'
const SVGIcon = props => (
  <svg className={props.className} pointerEvents="none">
    <use xlinkHref={props.href} />
  </svg>
)
const Results = ({ artist = {} }) => {
  const {
    name,
    country,
    rating: { value: ratingValue },
    type,
    mediaWikiImages
  } = artist

  const SVGIcon = props => (
    <svg className={props.className} pointerEvents="none">
      <use xlinkHref={props.href} />
    </svg>
  )

  return (
    <SArtist>
      <div>
        <div>
          <h1>{name}</h1>
          <h2>{country}</h2>
          <Rating initialRating={ratingValue} readonly />
          <div>
            <h1>{type}</h1>
          </div>
          <SButton>Details</SButton>
        </div>
      </div>
      {mediaWikiImages.length ? <img src={mediaWikiImages[0].url} /> : <Image />}
    </SArtist>
  )
}

Results.propTypes = {
  artist: PropTypes.object.isRequired
}

export default Results
