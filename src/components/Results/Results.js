import React from 'react'
import PropTypes from 'prop-types'
import { Artist, Scrollbar } from 'components'
import { SResults, SResultsList } from './SResults'

const Results = ({ children, data = [], scrollbarClassName = '' }) => {
  const artists =
    data && data.map((artist, index) => <Artist key={index} artist={artist} />)
  console.log('$$$$$$$$$$$$$$')
  console.log(artists)
  return (
    <SResults>
      <Scrollbar className={scrollbarClassName}>
        {children}
        <SResultsList>{artists}</SResultsList>
      </Scrollbar>
    </SResults>
  )
}

Results.propTypes = {
  children: PropTypes.node.isRequired,
  data: PropTypes.array.isRequired,
  scrollbarClassName: PropTypes.string
}

export default Results
