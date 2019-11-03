import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Rating from 'react-rating'
import { Link } from '@reach/router'
import { deleteFavorit, selectArtist } from 'actions'
import { openSearchTweens } from 'tweens'
import { Image, FavoritSVG } from 'components'
import { termCoolForLink } from 'helpers'
import { SArtist, SButton } from './SArtist'

const Results = ({
  artist = {},
  positionPlayer,
  deleteFavorit,
  selectArtist,
  search,
  isDetails
}) => {
  const {
    name,
    country,
    rating: { value: ratingValue },
    type,
    mediaWikiImages
  } = artist

  const handleAddFavorit = () => {
    selectArtist(artist)
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
    <SArtist isDetails={isDetails}>
      <div onClick={handleAddFavorit}>
        <div>
          <h1>{name}</h1>
          <h2>{country}</h2>
          <Rating initialRating={ratingValue} readonly />
          <div>
            <h1>{type}</h1>
          </div>
          {isDetails === undefined && (
            <SButton positionPlayer={isFavorits}>
              <Link
                onClick={handleArtistButton}
                to={`/artist/${termCoolForLink(name)}/details`}
              >
                Details
              </Link>
            </SButton>
          )}
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
  deleteFavorit: PropTypes.func.isRequired,
  positionPlayer: PropTypes.string.isRequired,
  selectArtist: PropTypes.func.isRequired,
  search: PropTypes.bool.isRequired,
  isDetails: PropTypes.bool.isRequired
}

const mapStateToProps = ({ mechanism: { positionPlayer, search } }) => ({
  positionPlayer,
  search
})

export default connect(
  mapStateToProps,
  { deleteFavorit, selectArtist }
)(Results)
