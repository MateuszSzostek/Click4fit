import React from "react";
import { Link } from "gatsby";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { IMobMenuProps } from "../helpers/helpers";
import { useIntl } from "gatsby-plugin-react-intl";

const MobileNav = (props: IMobMenuProps) => {
    const intl = useIntl();
    const { menuActive, toggleMenu } = props;
    return (
        <div>
            <ul
                className={
                    menuActive ? "mob-nav-elements-active" : "mob-nav-elements"
                }
            >
                <AnchorLink
                    onAnchorLinkClick={() => toggleMenu()}
                    to={
                        intl.formatMessage({
                            id: "lang",
                        }) + "/#features"
                    }
                >
                    <li className="mob-nav-item">
                        {intl.formatMessage({
                            id: "features",
                        })}
                    </li>
                </AnchorLink>
                <AnchorLink
                    onAnchorLinkClick={() => toggleMenu()}
                    to={
                        intl.formatMessage({
                            id: "lang",
                        }) + "/#howitworks"
                    }
                >
                    <li className="mob-nav-item">
                        {intl.formatMessage({
                            id: "how_it_works",
                        })}
                    </li>
                </AnchorLink>
                <AnchorLink
                    onAnchorLinkClick={() => toggleMenu()}
                    to={
                        intl.formatMessage({
                            id: "lang",
                        }) + "/#offer"
                    }
                >
                    <li className="mob-nav-item">
                        {intl.formatMessage({
                            id: "pricing",
                        })}
                    </li>
                </AnchorLink>
                <Link to="/blog">
                    <li className="mob-nav-item">
                        {intl.formatMessage({
                            id: "blog",
                        })}
                    </li>
                </Link>
                <AnchorLink
                    onAnchorLinkClick={() => toggleMenu()}
                    to={
                        intl.formatMessage({
                            id: "lang",
                        }) + "/#contact"
                    }
                >
                    <li className="mob-nav-item">
                        {intl.formatMessage({
                            id: "contact",
                        })}
                    </li>
                </AnchorLink>
            </ul>
        </div>
    );
};

export default MobileNav;
