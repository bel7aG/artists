import styled, { keyframes } from 'styled-components'

const opacityIn = keyframes`
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`

export const SEmpty = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  animation: ${opacityIn} 1s;

  > p {
    color: #fff;
    font-size: 2.3rem;
  }
`
