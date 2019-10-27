import styled, { css } from 'styled-components'

export const SWrapper = styled.div`
  position: relative;
  z-index: 1111;
  max-height: 100vh;
  min-height: 100vh;
  overflow: auto !important;
  ${props =>
    props.stylish &&
    css`
      ${{ ...props.stylish }}
    `};
`
