import { graphql, Link } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import Head from "../components/Head"

export const query = graphql`
  query($slug: String) {
    markdownRemark(
      fileAbsolutePath: { regex: "/(md_posts)/" }
      frontmatter: { slug: { eq: $slug } }
    ) {
      frontmatter {
        slug
        title
        id
        keywords
        shortDesc
        nextslug
        nexttitle
      }
      html
    }
  }
`

const Md_post = props => {
  return (
    <Layout>
      <Head title="" description="" keywords="" author="" />
      <section>
        <div className="post-list-container">
          <h1 className="article-title">
            {props.data.markdownRemark.frontmatter.title}
          </h1>
          <div
            className=""
            dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}
          />
          <div className="next-post-wrapper">
            <Link
              to={"/blog/" + props.data.markdownRemark.frontmatter.nextslug}
              className="post-slug"
            >
              {props.data.markdownRemark.frontmatter.nexttitle}
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Md_post
