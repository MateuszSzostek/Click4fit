import Button from "../components/Button";
import { Icon } from "@iconify/react";
import circleCheck from "@iconify-icons/akar-icons/circle-check";
import plusIcon from "@iconify-icons/fa-solid/plus";
import React from "react";
import { useIntl } from "gatsby-plugin-react-intl";

const Offer = () => {
    const intl = useIntl();
    return (
        <>
            <section>
                <div className="offer-container">
                    <div className="offer-card">
                        <h2 className="offer-title">
                            {intl.formatMessage({
                                id: "base_price",
                            })}
                        </h2>
                        <div>
                            <span className="offer-price">49</span>
                            <span className="offer-price-desc">zł</span>
                        </div>
                        <span className="offer-price-desc">
                            {intl.formatMessage({
                                id: "monthly",
                            })}
                        </span>
                        <br />
                        <div className="offer-text-description">
                            <Icon
                                className="offer-icon"
                                icon={circleCheck}
                            ></Icon>
                            <span>
                                {" "}
                                {intl.formatMessage({
                                    id: "price_text_1",
                                })}
                            </span>
                        </div>
                        <div className="offer-text-description">
                            <Icon
                                className="offer-icon"
                                icon={circleCheck}
                            ></Icon>
                            <span>
                                {" "}
                                {intl.formatMessage({
                                    id: "price_text_2",
                                })}
                            </span>
                        </div>
                        <div className="offer-text-description">
                            <Icon className="offer-icon" icon={plusIcon}></Icon>
                            <span>
                                {" "}
                                {intl.formatMessage({
                                    id: "price_text_3",
                                })}
                            </span>
                        </div>
                        <div className="offer-text-description">
                            <Icon className="offer-icon" icon={plusIcon}></Icon>
                            <span>
                                {" "}
                                {intl.formatMessage({
                                    id: "price_text_4",
                                })}
                            </span>
                        </div>
                        <br />
                        <Button
                            slug={
                                "https://app.click4fit.me/register-to-create-organisation"
                            }
                        >
                            {intl.formatMessage({
                                id: "register",
                            })}
                        </Button>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Offer;
