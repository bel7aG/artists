import React from 'react'
import PropTypes from 'prop-types'
import { SList } from './SList'

const List = ({ children = [], stylish = {}, className = '' }) => {
  console.log(children)
  const items = children.map((item, index) => <li key={index}>{item}</li>)

  return (
    <SList stylish={stylish} className={className}>
      {items}
    </SList>
  )
}

List.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  stylish: PropTypes.object
}

export default List
