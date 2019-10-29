import React, { useEffect } from 'react'
import { connect } from 'react-redux'
// import { Link } from 'gatsby'
// import Image from '../components/image'
import Layout, { SEO } from 'components'

import { graphql } from 'gatsby'

// import { connect as apolloConnect } from 'react-apollo'

// export const GatsbyQuery = graphql`
//   {
//     Swapcard {
//       search {
//         artists(query: "a", first: 2) {
//           totalCount
//           pageInfo {
//             hasNextPage
//             hasPreviousPage
//             startCursor
//             endCursor
//           }
//           nodes {
//             mediaWikiImages {
//               descriptionURL
//               url
//             }
//             id
//             name
//             sortName
//             disambiguation
//             genderID
//             type
//             country

//             rating {
//               value
//             }
//             works {
//               edges {
//                 node {
//                   id
//                 }
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// `

const HomePage = () => {
  return (
    <Layout>
      <SEO title="Home" />
    </Layout>
  )
}

export default HomePage
