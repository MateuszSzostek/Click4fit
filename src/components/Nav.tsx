import React from "react";
import GoUpButton from "./GoUpButton";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { useIntl, Link } from "gatsby-plugin-react-intl";

interface INavProps {
    toggleMenu?: Function;
}

const Nav = (props: INavProps) => {
    const intl = useIntl();
    const { toggleMenu } = props;
    return (
        <>
            <ul className="nav-elements">
                <AnchorLink
                    to={
                        intl.formatMessage({
                            id: "lang",
                        }) + "/#features"
                    }
                    title="Our team"
                >
                    <li className="nav-item">
                        {intl.formatMessage({
                            id: "features",
                        })}
                    </li>
                </AnchorLink>
                <AnchorLink
                    to={
                        intl.formatMessage({
                            id: "lang",
                        }) + "/#howitworks"
                    }
                    title="Our team"
                >
                    <li className="nav-item">
                        {intl.formatMessage({
                            id: "how_it_works",
                        })}
                    </li>
                </AnchorLink>
                <AnchorLink
                    to={
                        intl.formatMessage({
                            id: "lang",
                        }) + "/#offer"
                    }
                    title="Our team"
                >
                    <li className="nav-item">
                        {intl.formatMessage({
                            id: "pricing",
                        })}
                    </li>
                </AnchorLink>
                <Link to="/blog">
                    <li className="nav-item">
                        {intl.formatMessage({
                            id: "blog",
                        })}
                    </li>
                </Link>
                <AnchorLink
                    to={
                        intl.formatMessage({
                            id: "lang",
                        }) + "/#contact"
                    }
                    title="Our team"
                >
                    <li className="nav-item">
                        {intl.formatMessage({
                            id: "contact",
                        })}
                    </li>
                </AnchorLink>
            </ul>
            <GoUpButton />
        </>
    );
};

export default Nav;
