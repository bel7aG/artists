import styled from 'styled-components'
import { SResultsList } from 'components/Results/SResults'
export const SReleases = styled(SResultsList)`
  padding: 12rem 2rem;
`

export const SRelease = styled.div`
  width: 100% !important;
  background-color: rgba(0, 0, 0, 0.96);
  transition: all 0.32s ease-in-out;
  &:hover {
    background-color: rgba(0, 0, 0, 0.14) !important;
    transform: scale(0.975);
  }
  @media (min-width: 768px) {
    &:nth-child(odd) {
      margin-top: 0 !important;
    }

    &:nth-child(even) {
      margin-top: 15%;
    }
  }
  > div {
    height: 100%;
    @media (max-width: 768px) {
      flex-direction: column;
    }
  }
  > div > * {
    width: 100% !important;
    display: flex;
    justify-content: center;
    align-items: center;
    &:first-child {
      background-color: rgba(167, 202, 253, 0.2);
    }
    &:nth-child(2) {
      background-color: rgba(167, 202, 253, 0.19);
    }

    &:nth-child(3) {
      background-color: rgba(167, 202, 253, 0.18);
    }
  }
`
