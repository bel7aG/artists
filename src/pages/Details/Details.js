import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { navigate, Redirect } from '@reach/router'
import styled from 'styled-components'
import { addFavorit, deleteFavorit } from 'actions'
import { Artist, Mask, Releases, Scrollbar, Flex, FavoritSVG } from 'components'
import { closeSearchTweens, showTween, hideTween } from 'tweens'

const Details = ({
  pickedArtist,
  favorits,
  addFavorit,
  deleteFavorit,
  positionPlayer,
  search
}) => {
  const [maskBack, setMaskBack] = useState(false)

  useEffect(() => {
    showTween('.page-details', 1)
    return () => {
      hideTween('.scrollbar', 0.2)
      hideTween('.search-svg', 0.4)
    }
  }, [])

  if (pickedArtist === null) {
    return <Redirect noThrow to="/" />
  }

  const handleBackHome = () => {
    setMaskBack(true)
    hideTween('.page-details', 1)
    if (positionPlayer === 'FAVORITS' && !search) {
      closeSearchTweens()
    }
    setTimeout(() => {
      navigate('/')
    }, 1000)
  }

  const isInFavorit = favorits.find(({ id }) => id === pickedArtist.id)
  const handleFavorit = () => {
    if (!isInFavorit) {
      addFavorit(pickedArtist)
    } else {
      deleteFavorit(pickedArtist)
    }
  }

  const {
    releases: { nodes: releases }
  } = pickedArtist

  return (
    <SDetails isInFavorit={isInFavorit} className="page-details">
      <Flex direction="row" x="space-between" flex="0.1" y="center">
        <h1>
          <Mask mask={maskBack} />
          <span onClick={handleBackHome}>Back</span>
        </h1>
        <div onClick={handleFavorit}>
          <FavoritSVG />
        </div>
      </Flex>
      <Scrollbar>
        <SDetailsWrapper>
          <Artist isDetails={true} artist={pickedArtist} />
          <Releases releases={releases} />
        </SDetailsWrapper>
      </Scrollbar>
    </SDetails>
  )
}

const SDetails = styled.div`
  > div {
    position: fixed;
    &:first-child {
      height: 0;
      overflow: visible;
      z-index: 1112;
      padding: 3rem 1rem;

      flex-direction: row !important;
      > h1:first-child {
        > span {
          color: #ddd;
          cursor: pointer;
          transition: all 0.2s ease-in-out;
          &:hover {
            color: #fff;
          }
        }
        font-size: 3rem;
        letter-spacing: 4px;
      }
      > div {
        > svg {
          position: absolute;
          right: 3rem;
          fill: ${props => (props.isInFavorit ? '#d58e00' : '#fff')};
          height: 4rem;
        }
      }
    }
    &:nth-child(2) {
      > div:first-child {
        padding-top: 12rem;
      }
    }
  }
  z-index: -1;
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  min-height: 100vh;
  max-height: 100vh;
  overflow: hidden;
  a {
    color: #fff;
  }
  > :nth-child(2) {
    height: 100vh !important;
  }
  * {
    color: #fff;
  }
`

const SDetailsWrapper = styled.div`
  position: relative;
  > div:first-child {
    max-height: 60vh;
    min-height: auto;
    width: 50%;
    min-width: 32rem;
    margin: 0 auto;
  }
`

Details.propTypes = {
  pickedArtist: PropTypes.oneOfType([
    PropTypes.object.isRequired,
    PropTypes.instanceOf(null)
  ]),
  positionPlayer: PropTypes.bool.isRequired,
  search: PropTypes.bool.isRequired,
  favorits: PropTypes.array.isRequired,
  addFavorit: PropTypes.func.isRequired,
  deleteFavorit: PropTypes.func.isRequired
}

const mapStateToProps = ({
  data: { pickedArtist },
  favorits,
  mechanism: { search, positionPlayer }
}) => ({
  pickedArtist,
  favorits,
  positionPlayer,
  search
})

export default connect(
  mapStateToProps,
  { addFavorit, deleteFavorit }
)(Details)
