import styled, { keyframes } from 'styled-components'

const opacityIn = keyframes`
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`

export const SFavorits = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  transform: translateY(100vh);
  min-height: 100vh;
  max-height: 100vh;
  overflow: hidden;
  width: calc(100vw - 6rem);

  animation: ${opacityIn} 2s ease-out;

  > div:first-child {
    > div:first-child {
      > div {
        &:first-child {
          padding: 3rem 3rem 8rem 3rem !important;
        }

        &:last-child {
          right: 0 !important;
        }
      }
    }
  }
`
