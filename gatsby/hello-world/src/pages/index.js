import React from "react"
import { graphql } from "gatsby"

import Post from "../components/Post"
import PrimaryLayout from "../layouts/PrimaryLayout"

export default ({ data }) => {
  return (
    <PrimaryLayout column="col-xs-6">
      {data.allMarkdownRemark.nodes.map(node => {
        console.log(node.fields.slug)
        return (
          <Post
            readMore={node.fields.slug}
            key={node.frontmatter.title}
            image={node.frontmatter.image}
            title={node.frontmatter.title}
            excerpt={node.excerpt}
          />
        )
      })}
    </PrimaryLayout>
  )
}

export const query = graphql`
  {
    allMarkdownRemark {
      nodes {
        frontmatter {
          title
          date
          keywords
          image
        }
        excerpt
        html
        fields {
          slug
        }
      }
    }
  }
`
