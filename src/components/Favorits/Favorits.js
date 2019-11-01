import React from 'react'
import PropTypes from 'prop-types'
import { Results } from 'components'
import { SFavorits } from './SFavorits'

const Favorits = ({ data = [] }) => {
  return (
    data.length && (
      <SFavorits className="favorits">
        <Results data={data} />
      </SFavorits>
    )
  )
}

Favorits.propTypes = {
  data: PropTypes.array.isRequired
}

export default Favorits
