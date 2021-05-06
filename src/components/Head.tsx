import React from "react";
import Helmet from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";
import { IHeadProps } from "../helpers/helpers";
import { useIntl } from "gatsby-plugin-react-intl";

const Head: React.FC<IHeadProps> = (props) => {
    const intl = useIntl();
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
    `);
    return (
        <Helmet>
            <meta charSet="utf-8" />
            <title>
                {data.site.siteMetadata.title} |{" "}
                {intl.formatMessage({ id: "title" })}
            </title>
            <meta
                name="keywords"
                content={intl.formatMessage({ id: "keywords" })}
            />
            <meta
                name="author"
                content={intl.formatMessage({ id: "author" })}
            />
            <meta
                name="description"
                content={intl.formatMessage({ id: "description" })}
            />
            <meta name="robots" content="index, follow" />
            <link rel="preconnect" href="https://fonts.gstatic.com"></link>
            <link
                href="http://fonts.googleapis.com/css?family=Open+Sans:400,700"
                rel="stylesheet"
                type="text/css"
            ></link>
        </Helmet>
    );
};
export default Head;
