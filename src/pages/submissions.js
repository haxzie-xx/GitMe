import React from 'react'
import Link from 'gatsby-link'

const Submission = ({data}) => (
  <div>
    {
      data.allMarkdownRemark.edges.map(profile => {
        return <h3>{profile.node.frontmatter.username}</h3>
      })
    }
  </div>
)

export default Submission


export const profileQuery = graphql`
  query profiles{
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            username
            fullname
            location
          }
        }
      }
    }
  }
`