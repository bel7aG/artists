import styled from 'styled-components'
import { Scrollbars } from 'react-custom-scrollbars'

export const SScrollbar = styled(Scrollbars)`
  display: ${props => (props.className === 'scrollbar' ? 'none' : 'block')};
  > div {
    z-index: 10;
    &:first-child {
      min-height: 100vh;
      padding: 3rem 7rem;
      @media (max-width: 768px) {
        padding: 3rem 5rem 3rem 1rem;
      }
    }
    &:last-child {
      width: 2px !important;
      background-color: #3c3c3c;
      right: 2.7rem !important;
      margin: auto 0;
      max-height: 71%;
      min-height: 20rem;
      > div {
        background-color: #fff !important;
        width: 2px !important;
        perspective: 90000;
        border-radius: 0 !important;
        transition: all 0.09s ease;

        &:hover,
        &:focus,
        &:active {
          width: 5px !important;
          margin: 0 0 0 -1.51px !important;
        }
      }
    }
  }
`
