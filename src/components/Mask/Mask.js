import React from 'react'
import { SMask } from './SMask'

const Mask = ({ mask = false }) => mask && <SMask />

export default Mask
