import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Results, Empty } from 'components'
import { SFavorits } from './SFavorits'
import { connect } from 'react-redux'

const Favorits = ({ favorits }) => {
  const [render, setRender] = useState(null)

  useEffect(() => {
    if (favorits.length) {
      setRender(<Results data={favorits} />)
    } else {
      setRender(<Empty message="You dont have favorits GOOO Boom one." />)
    }
  }, [favorits.length])

  return <SFavorits className="favorits fade">{render}</SFavorits>
}

Favorits.propTypes = {
  favorits: PropTypes.array.isRequired
}

const mapStateToProps = ({ favorits }) => ({
  favorits
})

export default connect(mapStateToProps)(Favorits)
