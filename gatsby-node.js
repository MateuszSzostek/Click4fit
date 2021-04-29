const path = require("path")
const { paginate } = require("gatsby-awesome-pagination")

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const articleTemplate = path.resolve("./src/templates/md_post.tsx")

  const resPost = await graphql(`
    query MyQuery {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/(md_posts)/" } }
      ) {
        edges {
          node {
            html
            frontmatter {
              slug
              title
              id
              keywords
              shortDesc
              nextslug
              nexttitle
              postImage {
                name
                extension
              }
            }
          }
        }
      }
    }
  `)

  paginate({
    createPage,
    items: resPost.data.allMarkdownRemark.edges,
    itemsPerPage: 6,
    pathPrefix: "/blog",
    component: path.resolve(`./src/templates/md_post_list.tsx`),
  })
  resPost.data.allMarkdownRemark.edges.forEach(edge => {
    createPage({
      component: articleTemplate,
      path: `/blog/${edge.node.frontmatter.slug}`,
      context: {
        slug: edge.node.frontmatter.slug,
        postImage:
          edge.node.frontmatter.postImage.name +
          "." +
          edge.node.frontmatter.postImage.extension,
      },
    })
  })
}
