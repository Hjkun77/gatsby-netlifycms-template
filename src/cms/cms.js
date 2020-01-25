import React from "react"
import CMS, { init } from "netlify-cms-app"
import CSSInjector from "../components/CSSInjector";
import HomePagePreview from "./preview-templates/HomePagePreview"
import BlogPostPagePreview from "./preview-templates/BlogPostPagePreview"

// Manually initialize CMS
// if (process.env.GATSBY_IS_CMS === 'true') {
//     init()
// }

init()

CMS.registerPreviewTemplate("index", props => (
  <CSSInjector>
    <HomePagePreview {...props} />
  </CSSInjector>
))


CMS.registerPreviewTemplate("blog_post", props => (
  <CSSInjector>
    <BlogPostPagePreview {...props} />
  </CSSInjector>
))
