import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { Redirect } from '@reach/router'
import { Scrollbar } from 'components'

const SDetails = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: calc(100vw);
  min-height: 100vh;
  max-height: 100vh;
  overflow: hidden;
  > div {
    height: 100vh;
  }
  * {
    color: #fff;
  }
`

const Details = ({ pickedArtist }) => {
  if (pickedArtist === null) {
    return <Redirect noThrow to="/" />
  }

  return (
    <SDetails className="page-details">
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
