import React from 'react'
import { BlogPostTemplate } from '../../templates/blog-post'

const BlogPostPagePreview = ({ entry, getAsset }) => {
  return (
    <BlogPostTemplate
      title={entry.getIn(['data', 'title'])}
      slug={entry.getIn(['data', 'slug'])}
      date={entry.getIn(['data', 'date'])}
      body={entry.getIn(['data', 'body'])}
      seo={entry.getIn(['data', 'seo'])}
    />
  )
}

export default BlogPostPagePreview
