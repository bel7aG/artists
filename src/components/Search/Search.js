import React, { useState } from 'react'
import './_Search.scss'
import { TimelineLite, Power2 } from 'gsap'

const Search = props => {
  const [toggleSearch, setToggleSearch] = useState({
    close: 'close',
    square: 'square'
  })

  const handleSearch = () => {
    const searchAnimation = new TimelineLite()

    if (!toggleSearch.close) {
      searchAnimation.to('.search-box', 1.6, {
        left: 0,
        ease: Power2.easeInOut
      })
      setToggleSearch({
        close: 'close',
        square: 'square'
      })
    } else {
      searchAnimation.to('.search-box', 1.6, {
        left: '-50%',
        delay: 0.8,
        ease: Power2.easeInOut
      })
      setToggleSearch({
        close: '',
        square: ''
      })
    }
  }

  const { close, square } = toggleSearch

  return (
    <div className="search-box">
      <div>
        <input
          type="text"
          name="input"
          className={`input ${square}`}
          id="search-input"
        />
        <button
          type="reset"
          onClick={handleSearch}
          className={`search ${close}`}
          id="search-btn"
        />
      </div>
    </div>
  )
}

export default Search
