import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Rating from 'react-rating'
import { Link } from '@reach/router'
import { addFavorit, deleteFavorit, selectArtist } from 'actions'
import { openSearchTweens, showTween } from 'tweens'
import { Image, FavoritSVG } from 'components'
import { termCoolForLink } from 'helpers'

import { SArtist, SButton } from './SArtist'

const Results = ({
  artist = {},
  addFavorit,
  positionPlayer,
  deleteFavorit,
  selectArtist,
  search
}) => {
  const {
    name,
    country,
    rating: { value: ratingValue },
    type,
    mediaWikiImages
  } = artist

  useEffect(() => {
    showTween('.home', 1.2)
  }, [])

  const handleAddFavorit = () => {
    selectArtist(artist)
    addFavorit(artist)
  }

  const handleDeleteFavorit = () => {
    deleteFavorit(artist)
  }

  const isFavorits = positionPlayer === 'FAVORITS' && !search

  const handleArtistButton = () => {
    const whenCustomerClickToFavoritTheSearchWillOpen = positionPlayer
    if (whenCustomerClickToFavoritTheSearchWillOpen) {
      openSearchTweens()
    }
  }

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
          <SButton positionPlayer={isFavorits}>
            <Link
              onClick={handleArtistButton}
              to={`/artist/${termCoolForLink(name)}/details`}
            >
              Details
            </Link>
          </SButton>
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
  selectArtist: PropTypes.func.isRequired,
  search: PropTypes.bool.isRequired
}

const mapStateToProps = ({ mechanism: { positionPlayer, search } }) => ({
  positionPlayer,
  search
})

export default connect(
  mapStateToProps,
  { addFavorit, deleteFavorit, selectArtist }
)(Results)
