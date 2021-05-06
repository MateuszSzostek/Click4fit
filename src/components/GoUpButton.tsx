import React from "react";
import { Icon } from "@iconify/react";
import arrowUpCircle from "@iconify-icons/feather/arrow-up-circle";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { useIntl } from "gatsby-plugin-react-intl";

const GoUpButton = () => {
    const intl = useIntl();
    return (
        <AnchorLink
            to={intl.formatMessage({ id: "lang" }) + "/#landing"}
            className="go-up-button"
        >
            <Icon className="arrow-up-button" icon={arrowUpCircle}></Icon>
        </AnchorLink>
    );
};

export default GoUpButton;
