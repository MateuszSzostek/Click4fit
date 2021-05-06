import FeatureCard from "../components/FeatureCard";
import { cardsData } from "../data/featureCardsData";
import React from "react";
import { useIntl } from "gatsby-plugin-react-intl";

const Features = () => {
    const data = cardsData();
    const intl = useIntl();
    return (
        <>
            <section className="gray-background">
                <div className="features-container">
                    <h2 className="section-title">
                        {intl.formatMessage({ id: "features" })}
                    </h2>
                    <div className="feature-grid-container">
                        {data.map((s) => (
                            <FeatureCard
                                key={s.id}
                                name={s.name}
                                description={s.description}
                                icon={s.icon}
                                secondIcon={s.secondIcon}
                            ></FeatureCard>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Features;
