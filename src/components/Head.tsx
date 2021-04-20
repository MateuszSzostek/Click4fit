import React from "react"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
interface HeadProps {
  title?: string
  description?: string
  keywords?: string
  author?: string
}
const Head: React.FC<HeadProps> = props => {
  const data = useStaticQuery(graphql`
    query HomeQuery {
      site {
        siteMetadata {
          author
          description
          title
          keywords
        }
      }
    }
  `)
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>{data.site.siteMetadata.title + " | " + props.title}</title>
      <meta name="keywords" content={props.keywords} />
      <meta name="author" content={props.author} />
      <meta name="description" content={props.description} />
      <meta name="robots" content="index, follow" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com"></link>
      <link
        href="http://fonts.googleapis.com/css?family=Open+Sans:400,700"
        rel="stylesheet"
        type="text/css"
      ></link>
    </Helmet>
  )
}
export default Head
