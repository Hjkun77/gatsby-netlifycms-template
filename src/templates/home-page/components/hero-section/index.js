import React from 'react'
import { Link } from 'gatsby'
import Button from '../../../../components/button'
import Img from 'gatsby-image'

const HeroSection = ({ heroSection }) => {
  const {
    greetings,
    image,
    description,
    buttonVisible,
    buttonUrl,
    buttonText,
  } = heroSection
  return (
    <div>
      {!!image && !!image.childImageSharp ? (
        <Img
          style={{ margin: 0 }}
          fluid={image.childImageSharp.fluid}
          alt="Gatsby Scene"
        />
      ) : (
        <img style={{ margin: 0 }} src={image.publicURL} alt="Gatsby Scene" />
      )}
      {/* <img src={image && !!image.childImageSharp
        ? image.childImageSharp.fluid.src
        : image} alt="Gatsby Scene" /> */}
      <h1>
        {greetings}{' '}
        <span role="img" aria-label="wave emoji">
          👋
        </span>
      </h1>
      {description}
      {buttonVisible ? (
        <Link to={buttonUrl}>
          <Button marginTop="35px">{buttonText}</Button>
        </Link>
      ) : null}
    </div>
  )
}

export default HeroSection
