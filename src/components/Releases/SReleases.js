import styled from 'styled-components'
import { SResultsList } from 'components/Results/SResults'
export const SReleases = styled(SResultsList)`
  padding: 12rem 2rem;
`

export const SRelease = styled.div`
  width: 100% !important;
  background-color: rgba(0, 0, 0, 0.1) !important;
  transition: all 0.32s ease-in-out !important;
  &:hover {
    background-color: rgba(0, 0, 0, 0.94) !important;
    transform: scale(0.975) !important;
  }
  @media (min-width: 768px) {
    &:nth-child(odd) {
      margin-top: 0 !important;
    }

    &:nth-child(even) {
      margin-top: 15% !important;
    }
  }
  > div {
    height: 100%;
  }
  > div > * {
    width: 100% !important;
    display: flex !important;
    justify-content: center !important;
    align-items: center !important;
    &:first-child {
      background-color: rgba(167, 202, 253, 0.2) !important;
    }
    &:nth-child(2) {
      background-color: rgba(167, 202, 253, 0.19) !important;
    }

    &:nth-child(3) {
      background-color: rgba(167, 202, 253, 0.18) !important;
    }
  }
`
