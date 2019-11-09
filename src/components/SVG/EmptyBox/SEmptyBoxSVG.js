import styled, { keyframes } from 'styled-components'

const svgStroke = keyframes`
  0% {
    stroke-dasharray: 12;
  }

  50% {
    stroke-dasharray: -515;
  }

  100% {
    stroke-dasharray: 115;
  }
`

export const SEmptyBoxSVG = styled.svg`
  height: 40vh;
  > path,
  polygon {
    stroke-width: 3;
    stroke: #fff;
    stroke-dasharray: 1;
    animation-name: ${svgStroke};
    animation-fill-mode: forwards;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    animation-duration: 73s;
    animation-direction: alternate-reverse;
  }
`
