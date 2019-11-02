import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Rating from 'react-rating'
import { addFavorit } from 'actions'

import { SArtist, SButton } from './SArtist'
import { Image } from 'components'

const Results = ({ artist = {}, addFavorit }) => {
  const {
    name,
    country,
    rating: { value: ratingValue },
    type,
    mediaWikiImages
  } = artist

  const handleFavorit = () => {
    addFavorit(artist)
  }

  return (
    <SArtist>
      <div onClick={handleFavorit}>
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
  artist: PropTypes.object.isRequired,
  addFavorit: PropTypes.func.isRequired
}

export default connect(
  null,
  { addFavorit }
)(Results)
