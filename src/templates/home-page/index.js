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
  const { frontmatter } = data.markdownRemark
  return (
    <Layout location={frontmatter.slug} title={frontmatter.seo.siteTitle}>
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
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        slug
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
