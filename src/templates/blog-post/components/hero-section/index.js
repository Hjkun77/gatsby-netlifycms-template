import React from "react"

const HeroSection = ({ heroSection }) => {
  const {
    title,
    date,
    body,
  } = heroSection
  return (
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
  )
}

export default HeroSection
