import styled from 'styled-components'

export const SResults = styled.div`
  position: relative;
  height: 100vh;
  overflow: hidden;
`

export const SResultsList = styled.div`
  padding-top: 4rem;
  display: grid;
  grid-gap: 2rem 6%;
  align-items: flex-start;
  transition: all 0.22s ease-in-out;
  justify-items: center;

  > div {
    height: 45rem;
    position: relative;
    > img {
      width: 100%;
      height: auto;
    }
    overflow: hidden;
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(auto-fill, 46.4%);

    > div {
      &:nth-child(odd) {
        margin-top: 15%;
      }
    }
  }

  @media (max-width: 769px) {
    grid-template-columns: repeat(auto-fill, 100%);
  }

  @media (max-width: 400px) {
    grid-template-columns: repeat(auto-fill, 100%);
  }
`