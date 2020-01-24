import React, { Fragment } from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import { graphql } from "gatsby"
import Bio from "../../components/bio";

export const BlogPostTemplate = ({
  title, date, body
}) => {
  return (
    <Fragment>
      <div>
        <h1>{title}</h1>
        <p
          style={{
            ...scale(-1 / 5),
            display: `block`,
            marginBottom: rhythm(1),
            marginTop: rhythm(-1),
          }}
        >
          {date}
        </p>
        <div>{body}</div>
        <hr
          style={{
            marginBottom: rhythm(1),
          }}
        />
        <Bio />
        {/* <ul
        style={{
          display: `flex`,
          flexWrap: `wrap`,
          justifyContent: `space-between`,
          listStyle: `none`,
          padding: 0,
        }}
      >
        <li>
          {previous && (
            <Link to={`blog${previous.fields.slug}`} rel="prev">
              ← {previous.frontmatter.title}
            </Link>
          )}
        </li>
        <li>
          {next && (
            <Link to={`blog${next.fields.slug}`} rel="next">
              {next.frontmatter.title} →
              </Link>
          )}
        </li>
      </ul> */}
      </div>
    </Fragment>
  )
}

const BlogPostPage = ({ data }) => {
  const { frontmatter, fields } = data.markdownRemark
  const { title } = data.site.siteMetadata;
  console.log(frontmatter)
  return (
    <Layout location={fields.slug} title={title}>
      <SEO
        title={frontmatter.seo.siteTitle}
        description={frontmatter.seo.siteDescription}
        keywords={frontmatter.seo.siteKeywords}
      />

      <BlogPostTemplate
        title={frontmatter.title}
        date={frontmatter.date}
        body={frontmatter.body}
      />
    </Layout>
  )
}

export default BlogPostPage

export const BlogPostPageQuery = graphql`
  query BlogPostPage($id: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      fields {
        slug
      }
      frontmatter {
        title
        date
        body
        seo {
            siteTitle
            siteDescription
            siteKeywords
        }
      }
    }
  }
`
