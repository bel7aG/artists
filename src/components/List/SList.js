import styled, { css } from 'styled-components'

export const SList = styled.ul`
  position: relative;
  list-style: none;

  ${props =>
    props.stylish &&
    css`
      ${{ ...props.stylish }}
    `}

  &.menu-items__right {
    /* for menu */
    h1 {
      font-family: BebasNeue-Bold;
      line-height: 10rem;
      letter-spacing: -4px;
      font-size: 12.5rem;
      text-transform: uppercase;

      @media (max-width: 768px) {
        font-size: 6rem;
      }
    }
  }
  &.menu-items__left {
    text-transform: uppercase;
    font-weight: 700;
    font-size: 2rem;
    line-height: 3rem;
    font-family: BebasNeue-Bold;
    &::before {
      content: '';
      position: absolute;
      bottom: 0;
    }
  }

  @media (max-width: 768px) {
    &.menu-items__right {
      padding-left: 2rem;
    }
  }
`
