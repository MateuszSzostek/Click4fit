import { graphql } from "gatsby";
import React from "react";
import Layout from "../components/Layout";
import Head from "../components/Head";
import PostCard from "../components/PostCard";
import { useIntl } from "gatsby-plugin-react-intl";

export const query = graphql`
    query($skip: Int!, $limit: Int!) {
        allMarkdownRemark(
            sort: { fields: frontmatter___id, order: ASC }
            filter: { fileAbsolutePath: { regex: "/(md_posts)/" } }
            skip: $skip
            limit: $limit
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
                    }
                }
            }
        }
    }
`;

const Md_post_list = (props) => {
    const intl = useIntl();
    const posts = props.data.allMarkdownRemark.edges;
    return (
        <Layout>
            <Head title="Blog" description="" keywords="" author="" />
            <section>
                <div className="post-list-container">
                    <h1 className="blog-title">
                        {intl.formatMessage({
                            id: "blog",
                        })}
                    </h1>
                    {posts.map((s) => (
                        <PostCard
                            key={s.node.frontmatter.id}
                            slug={"/blog/" + s.node.frontmatter.slug}
                            title={s.node.frontmatter.title}
                            shortDesc={s.node.frontmatter.shortDesc}
                        ></PostCard>
                    ))}
                </div>
            </section>
        </Layout>
    );
};

export default Md_post_list;
