import React from 'react'
import { Link } from 'gatsby'
import { Form, SearchField } from 'components'
import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'

import { graphql } from 'gatsby'
import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'

export const GatsbyQuery = graphql`
  {
    rickAndMorty {
      character(id: 1) {
        name
        image
      }
    }
  }
`

const APOLLO_QUERY = gql`
  {
    meme {
      photo {
        url(
          transformation: {
            image: { resize: { width: 200, height: 200, fit: crop } }
          }
        )
      }
    }
  }
`

const HomePage = ({
  data: {
    rickAndMorty: { character }
  }
}) => {
  const { loading, error, data } = useQuery(APOLLO_QUERY)
  return (
    <Layout>
      <SEO title="Home" />
      <Form>
        <SearchField />
      </Form>

      <div style={{ textAlign: 'center', width: '600px', margin: '50px auto' }}>
        <h1>{character.name} With His Friend Sara</h1>
        <p>
          Rick & Morty API data loads at build time. Sara Vieira’s meme API loads at
          runtime.
        </p>
        <div>
          <img src={character.image} alt={character.name} style={{ width: 300 }} />

          {loading && <p>Loading Sara...</p>}
          {error && <p>Error: ${error.message}</p>}
          {data && data.meme && data.meme.photo && (
            <img
              src={data.meme.photo.url}
              alt="Sara Vieira"
              style={{ maxWidth: 300 }}
            />
          )}
        </div>
      </div>
    </Layout>
  )
}

export default HomePage
