import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { navigate, Redirect } from '@reach/router'
import { Scrollbar } from 'components'
import { showTween, hideTween } from 'tweens'

const SDetails = styled.div`
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

const Details = ({ pickedArtist }) => {
  useEffect(() => {
    showTween('.page-details', 1)
    return () => {
      hideTween('.search-svg', 0.8)
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

  return (
    <SDetails className="page-details">
      <div onClick={handleBackHome}>Home</div>
      <Scrollbar>
        <h1>bel7aG details</h1>
        <h2>okokokokokokok</h2>
        <h2>okokokokokokok</h2>
        <h2>okokokokokokok</h2>
        <h2>okokokokokokok</h2>
        <h2>okokokokokokok</h2>
        <h2>okokokokokokok</h2>
      </Scrollbar>
    </SDetails>
  )
}

Details.propTypes = {
  pickedArtist: PropTypes.oneOfType([
    PropTypes.object.isRequired,
    PropTypes.instanceOf(null)
  ])
}

const mapStateToProps = ({ data: { pickedArtist } }) => ({
  pickedArtist
})

export default connect(mapStateToProps)(Details)
