import React from 'react'
import PropTypes from 'prop-types'
import { SLoader } from './SLoader'

const Loader = ({ load }) => <SLoader opacity={load} />

Loader.propTypes = {
  load: PropTypes.bool.isRequired
}

export default Loader
