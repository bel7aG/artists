import React from 'react'
import PropTypes from 'prop-types'
import { Results, Empty } from 'components'
import { SFavorits } from './SFavorits'
import { connect } from 'react-redux'

const Favorits = ({ favorits }) => {
  if (favorits.length) {
    return (
      <SFavorits className="favorits">
        <Results isFavorits={true} data={favorits} />
      </SFavorits>
    )
  }

  return <Empty message="You dont have favorits GOOO Boom one." />
}

Favorits.propTypes = {
  favorits: PropTypes.array.isRequired
}

const mapStateToProps = ({ favorits }) => ({
  favorits
})

export default connect(mapStateToProps)(Favorits)
