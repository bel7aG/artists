import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { StarterTweens } from 'tweens'
import { SLayer, SLine } from './SLayer'

const Layer = ({ backgroundColor = '#000', lineColor = '#262626' }) => {
  useEffect(() => {
    StarterTweens()
  }, [])

  return (
    <SLayer className="layer" backgroundColor={backgroundColor}>
      <SLine position="right" className="line" lineColor={lineColor} />
      <SLine position="left" className="line" lineColor={lineColor} />
    </SLayer>
  )
}

Layer.propTypes = {
  backgroundColor: PropTypes.string,
  lineColor: PropTypes.string
}

export default Layer
