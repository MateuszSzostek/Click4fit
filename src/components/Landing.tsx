import React from "react";
import Sport from "../videos/Sport.mp4";
import Button from "../components/Button";
import { useIntl } from "gatsby-plugin-react-intl";

const Landing = () => {
    const intl = useIntl();
    return (
        <>
            <section>
                <div className="landing-container">
                    <video className="video-background" autoPlay muted loop>
                        <source src={Sport} type="video/mp4"></source>
                    </video>

                    <div className="landing-text">
                        <h1 className="landing-heading">
                            {intl.formatMessage({ id: "landing_title" })}
                        </h1>
                        <h2 className="landing-description">
                            {intl.formatMessage({ id: "landing_text" })}
                        </h2>
                        <Button
                            slug={
                                "https://app.click4fit.me/register-to-create-organisation"
                            }
                        >
                            {intl.formatMessage({
                                id: "try_for_free_two_weeks",
                            })}
                        </Button>
                    </div>
                </div>
            </section>
            <section>
                <div className="description-section">
                    <h1 className="section-title">
                        {intl.formatMessage({
                            id: "landing_description_main_1",
                        })}
                        <br />
                        {intl.formatMessage({
                            id: "landing_description_main_2",
                        })}
                    </h1>
                    <h3 className="description-text">
                        {intl.formatMessage({
                            id: "landing_description_second",
                        })}
                    </h3>
                </div>
            </section>
        </>
    );
};

export default Landing;
