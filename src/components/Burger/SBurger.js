import styled from 'styled-components'

export const SBurger = styled.div`
  position: fixed;
  z-index: 9911;
  height: 0;
  right: 0;
  transform: translateX(2.5%);
  bottom: 7rem;
  min-width: 6rem;
  max-width: 6rem;
  cursor: pointer;

  > div {
    > span {
      position: absolute;
      height: 100%;
      background-color: #fff;
      width: 2px;
      transition: all 0.4s ease-in-out;

      &:nth-child(1) {
        left: 14px;
      }

      &:nth-child(2) {
        left: 50%;
        bottom: 0;
        height: 60%;
      }

      &:nth-child(3) {
        right: 14px;
      }
    }
  }
`
