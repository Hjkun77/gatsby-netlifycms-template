import React from "react"
import { HomePageTemplate } from "../../templates/home-page"

const getHeroSection = ({ entry, getAsset }) => {
  return {
    greetings: entry.getIn(["data", "heroSection", "greetings"]),
    image: getAsset(entry.getIn(["data", "heroSection", "greetings"])),
    description: entry.getIn(["data", "heroSection", "description"]),
    buttonText: entry.getIn(["data", "heroSection", "buttonText"]),
    buttonUrl: entry.getIn(["data", "heroSection", "buttonUrl"]),
    buttonVisible: entry.getIn(["data", "heroSection", "buttonVisible"]),
  }
}

const HomePagePreview = ({ entry, getAsset }) => {
  return (
    <HomePageTemplate
      heroSection={getHeroSection({ entry, getAsset })}
      seo={entry.getIn(["data", "seo"])}
    />
  )
}

export default HomePagePreview
