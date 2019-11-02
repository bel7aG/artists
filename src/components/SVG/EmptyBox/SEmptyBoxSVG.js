import styled, { keyframes } from 'styled-components'

const svgStroke = keyframes`
  0% {
    stroke: $light-orange;
    stroke-dasharray: 12;
    opacity: 1;
  }

  50% {
    stroke: $gold;
    stroke-dasharray: -515;
    opacity: 0.98;
  }

  100% {
    stroke: $light-orange;
    stroke-dasharray: 115;
    opacity: 1;
  }
`

export const SEmptyBoxSVG = styled.svg`
  height: 40vh;
  > path {
    stroke-width: 3;
    stroke: #999;
    stroke-dasharray: 411;
    animation-name: ${svgStroke};
    animation-fill-mode: forwards;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    animation-duration: 29s;
    animation-direction: alternate-reverse;
  }
`
