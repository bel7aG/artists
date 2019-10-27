import styled, { css } from 'styled-components'

export const FlexRow = styled.div`
  display: flex;
  height: ${props => (props.stylish && props.stylish.height) || '100%'};
  width: ${props => (props.stylish && props.stylish.width) || '100%'};

  justify-content: ${props => (props.stylish && props.stylish.x) || 'flex-start'};
  align-items: ${props => (props.stylish && props.stylish.y) || 'flex-start'};
  ${props =>
    props.stylish &&
    css`
      ${{ ...props.stylish }}
    `}

  > * {
    z-index: 1;
    flex: ${props => (props.stylish && props.stylish.flex) || 1};
  }

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    height: auto;
  }
`

export const FlexColumn = styled(FlexRow)`
  flex-direction: column;

  align-items: ${props => (props.stylish && props.stylish.x) || 'flex-start'};
  justify-content: ${props => (props.stylish && props.stylish.y) || 'flex-start'};
`
