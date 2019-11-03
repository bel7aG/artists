import React from 'react'
import PropTypes from 'prop-types'
import { SReleases, SRelease } from './SReleases'
import { Flex } from 'components'

const Releases = ({ releases = [] }) => {
  const clonedReleases = releases.map(({ title, country, barcode }, index) => {
    if (index < 10) {
      return (
        <SRelease>
          <Flex direction="column" x="center" y="center">
            {title && <h1>{title}</h1>}
            {country && <h2>{country}</h2>}
            {barcode && <h2>{barcode}</h2>}
          </Flex>
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
