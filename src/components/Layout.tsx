import * as React from "react";
import Head from "./Head";
import Header from "./Header";
import Footer from "./Footer";
import "../css/styles.min.css";
import { useIntl } from "gatsby-plugin-react-intl";

const Layout = ({ children }) => {
    const intl = useIntl();
    return (
        <>
            <Head
                title={intl.formatMessage({
                    id: "layout_title",
                })}
            />
            <Header />
            <main>{children}</main>
            <Footer />
        </>
    );
};

export default Layout;
