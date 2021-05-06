import React from "react";
import { useIntl } from "gatsby-plugin-react-intl";

const ContactForm = () => {
    const intl = useIntl();
    return (
        <>
            <section className="gray-background">
                <address>
                    <div className="contact-container">
                        <h2 className="section-title">
                            {intl.formatMessage({ id: "contact" })}
                        </h2>
                        <h3 className="bold-text">
                            {intl.formatMessage({ id: "text_to_us" })}
                        </h3>
                        <p>{intl.formatMessage({ id: "email" })}</p>
                        <h3 className="bold-text">
                            {intl.formatMessage({ id: "meet_us" })}
                        </h3>
                        <p>{intl.formatMessage({ id: "address" })}</p>
                        <h3 className="bold-text">
                            {intl.formatMessage({ id: "call_us" })}
                        </h3>
                        <p>{intl.formatMessage({ id: "phone" })}</p>
                    </div>
                </address>
            </section>
        </>
    );
};

export default ContactForm;
