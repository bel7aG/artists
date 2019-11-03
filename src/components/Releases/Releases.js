import React from 'react'
import PropTypes from 'prop-types'
import { SReleases, SRelease } from './SReleases'

const Releases = ({ releases = [] }) => {
  const clonedReleases = releases.map(({ title }, index) => {
    if (index < 10) {
      return (
        <SRelease>
          <h1>{title}</h1>
        </SRelease>
      )
    } else {
      return null
    }
  })
  return <SReleases>{clonedReleases}</SReleases>
}

Releases.propTypes = {
  releases: PropTypes.array.isRequired
}

export default Releases
