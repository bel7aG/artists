import styled from 'styled-components'

export const SMenu = styled.div`
  position: fixed;
  height: 100vh;
  width: 60px;
  right: 0%;
  background: #0f0f0f;
  transform: translateY(100vh);
  z-index: 50;
`

// the white layer
export const SMenuLayer = styled.div`
  background-color: #fff;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 0;
`
