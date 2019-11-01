import { useEffect, useRef, useState } from 'react'
import useWindowSize from './useWindowSize'
import useInterval from './useInterval'

const WINDOW = 'window'
const PARENT = 'parent'

function useInfiniteScroll({
  loading,
  hasNextPage,
  onLoadMore,
  threshold = 150,
  checkInterval = 200,
  scrollContainer = WINDOW
}) {
  const ref = useRef()
  const { height: windowHeight, width: windowWidth } = useWindowSize()

  const [listen, setListen] = useState(true)

  useEffect(() => {
    if (!loading) {
      setListen(true)
    }
  }, [loading])

  function getParentSizes() {
    const parentNode = ref.current.parentNode
    const parentRect = parentNode.getBoundingClientRect()
    const { top, bottom, left, right } = parentRect

    return { top, bottom, left, right }
  }

  function getBottomOffset() {
    const rect = ref.current.getBoundingClientRect()

    const bottom = rect.bottom
    let bottomOffset = bottom - windowHeight

    if (scrollContainer === PARENT) {
      const { bottom: parentBottom } = getParentSizes()
      // Distance between bottom of list and its parent
      bottomOffset = bottom - parentBottom
    }

    return bottomOffset
  }

  function isParentInView() {
    const parent = ref.current ? ref.current.parentNode : null

    if (parent) {
      const { left, right, top, bottom } = getParentSizes()
      if (left > windowWidth) {
        return false
      } else if (right < 0) {
        return false
      } else if (top > windowHeight) {
        return false
      } else if (bottom < 0) {
        return false
      }
    }

    return true
  }

  function listenBottomOffset() {
    if (listen && !loading && hasNextPage) {
      if (ref.current) {
        if (scrollContainer === PARENT) {
          if (!isParentInView()) {
            // Do nothing if the parent is out of screen
            return
          }
        }

        // Check if the distance between bottom of the container and bottom of the window or parent
        // is less than "threshold"
        const bottomOffset = getBottomOffset()
        const validOffset = bottomOffset < threshold

        if (validOffset) {
          setListen(false)
          onLoadMore()
        }
      }
    }
  }

  useInterval(
    () => {
      listenBottomOffset()
    },
    // Stop interval when there is no next page.
    hasNextPage ? checkInterval : 0
  )

  return ref
}

export default useInfiniteScroll
