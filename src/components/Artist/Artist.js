import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Rating from 'react-rating'
import { addFavorit, deleteFavorit } from 'actions'

import { SArtist, SButton } from './SArtist'
import { Image, FavoritSVG } from 'components'

const Results = ({
  artist = {},
  addFavorit,
  positionPlayer,
  deleteFavorit,
  search
}) => {
  const {
    name,
    country,
    rating: { value: ratingValue },
    type,
    mediaWikiImages
  } = artist

  const handleAddFavorit = () => {
    addFavorit(artist)
  }

  const handleDeleteFavorit = () => {
    deleteFavorit(artist)
  }

  const isFavorits = positionPlayer === 'FAVORITS' && !search

  return (
    <SArtist>
      <div onClick={handleAddFavorit}>
        <div>
          <h1>{name}</h1>
          <h2>{country}</h2>
          <Rating initialRating={ratingValue} readonly />
          <div>
            <h1>{type}</h1>
          </div>
          <SButton positionPlayer={isFavorits}>Details</SButton>
        </div>
      </div>
      {mediaWikiImages.length ? <img src={mediaWikiImages[0].url} /> : <Image />}
      {isFavorits && (
        <div onClick={handleDeleteFavorit}>
          <FavoritSVG />
        </div>
      )}
    </SArtist>
  )
}

Results.propTypes = {
  artist: PropTypes.object.isRequired,
  addFavorit: PropTypes.func.isRequired,
  deleteFavorit: PropTypes.func.isRequired,
  positionPlayer: PropTypes.string.isRequired,
  search: PropTypes.bool.isRequired
}

const mapStateToProps = ({ mechanism: { positionPlayer, search } }) => ({
  positionPlayer,
  search
})

export default connect(
  mapStateToProps,
  { addFavorit, deleteFavorit }
)(Results)
