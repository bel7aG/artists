import styled, { css } from 'styled-components'

export const SSearchField = styled.input`
  font-size: 2rem;
  box-sizing: border-box;
  min-width: 24rem;
  width: 26%;
  margin: 0 auto;
  height: 34px;
  border: 0;
  color: #fff;
  border-bottom: 1px solid #fff;
  background: none;
  font-weight: 400;
  outline: 0;
  line-height: 1rem;
  transition: color 0.4s linear;
  ${props =>
    props.stylish &&
    css`
      ${{ ...props.stylish }}
    `}
  ::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: #fff;
    letter-spacing: 8px;
    opacity: 1; /* Firefox */
    ${props =>
      props.stylish &&
      css`
        ${{ ...props.stylish }}
      `}
  }
`
