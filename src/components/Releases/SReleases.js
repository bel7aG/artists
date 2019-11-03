import styled from 'styled-components'
import { SResultsList } from 'components/Results/SResults'
export const SReleases = styled(SResultsList)`
  padding: 12rem 2rem;
`

export const SRelease = styled.div`
  width: 100%;
  background-color: rgba(255, 255, 255, 0.1);
  transition: all 0.32s ease-in-out;
  &:hover {
    background-color: rgba(255, 255, 255, 0.18);
    transform: scale(0.975);
  }
  @media (min-width: 768px) {
    &:nth-child(odd) {
      margin-top: 0 !important;
    }

    &:nth-child(even) {
      margin-top: 15% !important;
    }
  }
`
