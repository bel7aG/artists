import React from 'react'
import styled from 'styled-components'

const SDetails = styled.div`
  position: absolute;
  top: 100vh;
  left: 0;
  width: calc(100vw - 6rem);
  min-height: 100vh;
  max-height: 100vh;
  overflow: hidden;
  background-color: #f00;
`

const Details = () => {
  return (
    <SDetails className="page-details">
      <h1>bel7aG details</h1>
      <h2>okokokokokokok</h2>
      <h2>okokokokokokok</h2>
      <h2>okokokokokokok</h2>
      <h2>okokokokokokok</h2>
      <h2>okokokokokokok</h2>
      <h2>okokokokokokok</h2>
    </SDetails>
  )
}

export default Details
