import styled, { keyframes } from 'styled-components'

const linear = keyframes`
  0% {
    background-position-x: 0%;
  }
  50% {
    background-position-x: 100%;
  }
  
  100% {
    background-position-x: 0%;
  }
`

export const SLoader = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  height: 0.4rem;
  width: 100vw;
  opacity: ${props => (props.showLoader ? 1 : 0)};
  transition: all 0.3s ease-in;
  background-image: linear-gradient(
    to right,
    #ffe6ae,
    #fac07d,
    #f79658,
    #f36544,
    #eb1241
  );
  z-index: 10000;
  background-size: 150%;
  animation: ${linear} 0.8s linear 0s infinite forwards;
`
