import React, { Fragment } from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import { graphql } from "gatsby"
import HeroSection from "./components/hero-section"

export const HomePageTemplate = ({
  heroSection
}) => {
  return (
    <Fragment>
      <HeroSection heroSection={heroSection} />
    </Fragment>
  )
}

const HomePage = ({ data }) => {
  const { frontmatter, fields } = data.markdownRemark
  const { title } = data.site.siteMetadata;
  return (
    <Layout location={fields.slug} title={title}>
      <SEO
        title={frontmatter.seo.siteTitle}
        description={frontmatter.seo.siteDescription}
        keywords={frontmatter.seo.siteKeywords}
      />

      <HomePageTemplate
        heroSection={frontmatter.heroSection}
      />
    </Layout>
  )
}

export default HomePage

export const HomePageQuery = graphql`
  query HomePage($id: String!) {
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
        heroSection {
          greetings
          image {
              childImageSharp {
                  fluid(maxWidth: 1440, quality: 90) {
                      src
                      srcSet
                      aspectRatio
                      sizes
                      base64
                  }
              }
              publicURL
          }
          description
          buttonText
          buttonVisible
          buttonUrl
        }
        seo {
          siteTitle
          siteDescription
          siteKeywords
        }
      }
    }
  }
`
