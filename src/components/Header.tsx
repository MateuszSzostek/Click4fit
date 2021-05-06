import React, { useState, useEffect } from "react";
import { StaticImage } from "gatsby-plugin-image";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import Button from "./Button";
import { Icon } from "@iconify/react";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { useIntl } from "gatsby-plugin-react-intl";
import crossIcon from "@iconify-icons/gridicons/cross";
import menuIcon from "@iconify-icons/heroicons-solid/menu";

const Header = () => {
    const intl = useIntl();
    const [menuActive, setMenuActive] = useState<boolean>(false);

    function getWidth() {
        return Math.max(
            document.documentElement.clientWidth || 0,
            window.innerWidth || 0
        );
    }

    let toggleMenu = () => {
        if (getWidth() < 1200) {
            setMenuActive(!menuActive);
        }
    };

    useEffect(() => {
        const resizeListener = () => {
            setMenuActive(false);
        };
        window.addEventListener("resize", resizeListener);
        return () => {
            window.removeEventListener("resize", resizeListener);
        };
    }, []);

    return (
        <div className="header-container">
            <header style={{ marginLeft: "20px", marginRight: "20px" }}>
                <AnchorLink
                    to={
                        intl.formatMessage({
                            id: "lang",
                        }) + "/#landing"
                    }
                >
                    <StaticImage
                        src="../images/click4fit_logo_black.png"
                        alt="logo"
                        width={130}
                    />
                </AnchorLink>
                <nav>
                    <Nav />
                    <MobileNav
                        menuActive={menuActive}
                        toggleMenu={toggleMenu}
                    />
                </nav>
                <div className="pc-promo-button-wrapper">
                    <Button
                        slug={
                            "https://app.click4fit.me/register-to-create-organisation"
                        }
                        isAnimated={true}
                        animatedText="PRZEZ DWA TYGODNIE"
                    >
                        {intl.formatMessage({ id: "try_for_free" })}
                    </Button>
                </div>
                <div onClick={toggleMenu} className="mob-menu-button">
                    <Icon
                        className="menu-button"
                        icon={menuActive ? crossIcon : menuIcon}
                    ></Icon>
                </div>
            </header>
        </div>
    );
};

export default Header;
