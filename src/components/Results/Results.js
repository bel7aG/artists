import React from 'react'
import PropTypes from 'prop-types'
import { Artist, Scrollbar } from 'components'
import { SResults, SResultsList } from './SResults'
import InfiniteScroll from 'react-infinite-scroller'

const Results = ({
  children,
  data = [],
  hasNextPage = false,
  scrollbarClassName = '',
  handleLoadMoreArtists
}) => {
  const artists =
    data && data.map((artist, index) => <Artist key={index} artist={artist} />)
  console.log('$$$$$$$$$$$$$$')
  console.log(artists)
  return (
    <SResults>
      <Scrollbar className={scrollbarClassName}>
        {children}
        {artists.length && (
          <InfiniteScroll
            loadMore={() => handleLoadMoreArtists()}
            useWindow={false}
            hasMore={hasNextPage}
          >
            <SResultsList>{artists}</SResultsList>
          </InfiniteScroll>
        )}
      </Scrollbar>
    </SResults>
  )
}

Results.propTypes = {
  children: PropTypes.node,
  data: PropTypes.array.isRequired,
  handleLoadMoreArtists: PropTypes.func,
  hasNextPage: PropTypes.bool,
  scrollbarClassName: PropTypes.string
}

export default Results
