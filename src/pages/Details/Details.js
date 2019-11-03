import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { navigate, Redirect } from '@reach/router'
import { Artist, Scrollbar, Flex, FavoritSVG } from 'components'
import { showTween, hideTween } from 'tweens'
import { addFavorit, deleteFavorit } from 'actions'

const SDetails = styled.div`
  > div {
    position: fixed;
    &:first-child {
      height: 9.6rem;
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
  width: calc(100vw);
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
    height: 60vh;
    width: 50%;
    min-width: 32rem;
    margin: 0 auto;
  }
`

const Details = ({ pickedArtist, favorits, addFavorit, deleteFavorit }) => {
  useEffect(() => {}, [favorits])

  useEffect(() => {
    showTween('.page-details', 1)
    return () => {
      hideTween('.search-svg', 0.4)
    }
  }, [])

  if (pickedArtist === null) {
    return <Redirect noThrow to="/" />
  }

  const handleBackHome = () => {
    hideTween('.page-details', 1)
    setTimeout(() => {
      navigate('/')
    }, 1000)
  }
  console.log('^^^^^^^^ôooooooooooo')
  console.log(pickedArtist)
  console.log('^^^^^^^^ôooooooooooo')

  const isInFavorit = favorits.find(({ id }) => id === pickedArtist.id)
  const handleFavorit = () => {
    if (!isInFavorit) {
      addFavorit(pickedArtist)
    } else {
      deleteFavorit(pickedArtist)
    }
  }

  return (
    <SDetails isInFavorit={isInFavorit} className="page-details">
      <Flex direction="row" x="space-between" flex="0.1" y="center">
        <h1 onClick={handleBackHome}>
          <span>Back</span>
        </h1>
        <div onClick={handleFavorit}>
          <FavoritSVG />
        </div>
      </Flex>
      <Scrollbar>
        <SDetailsWrapper>
          <Artist isDetails={true} artist={pickedArtist} />
        </SDetailsWrapper>
      </Scrollbar>
    </SDetails>
  )
}

Details.propTypes = {
  pickedArtist: PropTypes.oneOfType([
    PropTypes.object.isRequired,
    PropTypes.instanceOf(null)
  ]),
  favorits: PropTypes.array.isRequired,
  addFavorit: PropTypes.func.isRequired,
  deleteFavorit: PropTypes.func.isRequired
}

const mapStateToProps = ({ data: { pickedArtist }, favorits }) => ({
  pickedArtist,
  favorits
})

export default connect(
  mapStateToProps,
  { addFavorit, deleteFavorit }
)(Details)
