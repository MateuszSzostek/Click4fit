import { graphql } from "gatsby";
import React from "react";
import Layout from "../components/Layout";
import Head from "../components/Head";
import { useIntl, Link } from "gatsby-plugin-react-intl";

export const query = graphql`
    query($slug: String, $postImage: String) {
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
                postImage {
                    childImageSharp {
                        gatsbyImageData(layout: FULL_WIDTH)
                    }
                }
            }
            html
        }
        imageSharp(fluid: { originalName: { eq: $postImage } }) {
            gatsbyImageData(layout: FULL_WIDTH)
        }
    }
`;

const Md_post = (props) => {
    return (
        <Layout>
            <Head
                title={props.data.markdownRemark.frontmatter.title}
                description={props.data.markdownRemark.frontmatter.shortDesc}
                keywords={props.data.markdownRemark.frontmatter.keywords}
                author="Oakfusion"
            />
            <section>
                <div className="post-list-container">
                    <h1 className="article-title">
                        {props.data.markdownRemark.frontmatter.title}
                    </h1>
                    <article>
                        <div
                            className=""
                            dangerouslySetInnerHTML={{
                                __html: props.data.markdownRemark.html,
                            }}
                        />
                    </article>
                    <div className="next-post-wrapper">
                        <Link
                            to={
                                "/blog/" +
                                props.data.markdownRemark.frontmatter.nextslug
                            }
                            className="post-slug"
                        >
                            {props.data.markdownRemark.frontmatter.nexttitle}
                        </Link>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default Md_post;
