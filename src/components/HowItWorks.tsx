import Sport from "../videos/Sport.mp4";
import React from "react";
import { useIntl } from "gatsby-plugin-react-intl";

const HowItWorks = () => {
    const intl = useIntl();
    return (
        <>
            <section className="dark-gray-background">
                <div className="double-container">
                    <div className="double-grid">
                        <div>
                            <h2 className="section-title-light">
                                {intl.formatMessage({ id: "see_how_it_works" })}
                            </h2>
                            <p className="description-text-white">
                                {intl.formatMessage({ id: "see_movie" })}
                            </p>
                        </div>
                        <div>
                            <video className="example-video" controls>
                                <source src={Sport} type="video/mp4"></source>
                            </video>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default HowItWorks;
