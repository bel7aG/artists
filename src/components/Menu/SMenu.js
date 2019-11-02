import styled from 'styled-components'

export const SMenu = styled.div`
  position: fixed;
  height: 100vh;
  width: 60px;
  top: 0;
  right: 0;
  background: #0f0f0f;
  z-index: 50;

  > .menu-items-wrapper {
    display: none;
  }
  > div:nth-child(2) {
    width: 49px;
    height: 49px;
    &,
    > svg {
      position: absolute;
      z-index: 1;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      cursor: pointer;
    }

    > svg {
      width: 45px;
      height: 45px;
    }
  }
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
