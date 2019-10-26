import styled from 'styled-components'
import { Scrollbars } from 'react-custom-scrollbars'

export const SScrollbar = styled(Scrollbars)`
  > div {
    &:first-child {
      overflow: hidden;
      padding: 3rem calc(7rem + 5%) 3rem calc(3rem + 3%);
    }
    &:last-child {
      width: 2px !important;
      background-color: #ccc;
      right: 3rem !important;
      margin: auto 0;
      max-height: 71%;
      min-height: 20rem;
      > div {
        background-color: #5c5c5c !important;
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
