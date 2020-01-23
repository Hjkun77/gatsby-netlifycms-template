import React from "react"
import { Link } from "gatsby"
import Button from "../../../../components/button"

const HeroSection = ({ heroSection }) => {
  const {
    greetings,
    image,
    description,
    buttonVisible,
    buttonUrl,
    buttonText
  } = heroSection
  return (
    <div>
      <img style={{ margin: 0 }} src={image && !!image.childImageSharp
        ? image.childImageSharp.fluid.src
        : image} alt="Gatsby Scene" />
      <h1>
        {greetings}{" "}
        <span role="img" aria-label="wave emoji">
          👋
        </span>
      </h1>
      {description}
      {
        buttonVisible ?
          <Link to={buttonUrl}>
            <Button marginTop="35px">{buttonText}</Button>
          </Link> : null
      }
    </div>
  )
}

export default HeroSection
