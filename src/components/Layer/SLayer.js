import styled from 'styled-components'

export const SLayer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 100vw;
  background-color: ${props => props.backgroundColor};
  z-index: 100000;

  &::before,
  &::after {
    content: '';
    position: absolute;
    height: 2px;
    width: 50vw;
    background-color: ${props => props.lineColor};
    top: 50%;
    transform: translateY(-50%);
  }

  &::before {
    left: 0;
  }

  &::after {
    bottom: 50%;
    right: 0;
  }
`

export const SLine = styled.div`
  position: absolute;
  top: 50%;
  left: ${props => (props.position === 'left' ? 0 : 'auto')};
  right: ${props => (props.position === 'right' ? 0 : 'auto')};
  height: 2px;
  width: 0;
  background-color: ${props => props.lineColor};
`
