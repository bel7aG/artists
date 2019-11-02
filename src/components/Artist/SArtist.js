import styled from 'styled-components'

export const SArtist = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  &:hover {
    > div {
      &:nth-child(2) {
        transform: scale(1);
      }
    }
  }
  > div {
    &:first-child {
      z-index: 1;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      transition: all 0.3s ease-in;
      cursor: default;

      > div {
        > *:not(:last-child) {
          opacity: 0;
          transition: opacity 0.59s 0.68s ease-out;
        }
        height: 100%;
        transition: all 0.29s 0.38s ease-out;
        transform: translateY(10%);
        color: #fff;

        > h1 {
          &:first-child {
            text-align: center;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            font-size: 3rem;
          }
        }

        > h2 {
          position: absolute;
          bottom: 4.4rem;
          width: 100%;
          font-size: 3.2rem;
          text-align: center;
          letter-spacing: 2px;
        }

        > span {
          opacity: 0.4;
          padding: 1rem 2rem;
        }

        > div {
          position: absolute;
          right: 0;
          top: 0;
          padding: 1rem 2rem;
          > h1 {
            color: #a8a8a8;
            text-transform: uppercase;
          }
        }
      }

      &:hover {
        background-color: rgba(18, 0, 64, 0.6);
        > div {
          > *:not(:last-child) {
            opacity: 1;
          }
          opacity: 1;
          transform: translateY(0);
        }
      }
    }

    &:nth-child(2) {
      transform: scale(1.036);
      height: 100%;
      width: 100%;
      transition: all 0.32s 0.2s ease-out;
    }
  }
`

export const SButton = styled.button`
  position: absolute;
  bottom: 0;
  left: 0;

  height: 4rem;
  width: 100%;

  background-color: #0f0f0f;
  color: #fff;
  font-family: BebasNeue-Bold;
  font-size: 2.3rem;
  letter-spacing: 4px;

  cursor: pointer;
  transition: letter-spacing 0.3s, color 0.2s 0.3s linear;
  &:hover {
    letter-spacing: 6px;
    color: #eb1241;
  }
`
