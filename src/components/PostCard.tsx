import React from "react";
import { IPostCardProps } from "../helpers/helpers";
import { useIntl, Link } from "gatsby-plugin-react-intl";

const PostCard = (props: IPostCardProps) => {
    const intl = useIntl();
    const { title, slug, shortDesc } = props;
    return (
        <div>
            <h2 className="post-title">{title}</h2>
            <p className="post-description">{shortDesc}</p>
            <Link to={slug} className="post-slug">
                {intl.formatMessage({
                    id: "read_more",
                })}
            </Link>
        </div>
    );
};

export default PostCard;
