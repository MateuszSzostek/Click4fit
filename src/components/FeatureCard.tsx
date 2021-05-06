import React, { useState } from "react";
import { Icon } from "@iconify/react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import { IFeatureCardProps } from "../helpers/helpers";
import { useIntl } from "gatsby-plugin-react-intl";

const FeatureCard = (props: IFeatureCardProps) => {
    const intl = useIntl();
    const { name, description, icon, secondIcon } = props;

    const [open, setOpen] = useState(false);

    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);

    return (
        <div className="feature-card">
            <div className="card-icons-container ">
                <div>
                    <Icon className="card-icon" icon={icon} />
                </div>
                <div>
                    {secondIcon && (
                        <div onClick={onOpenModal} className="icon-modal">
                            <Icon className="card-icon" icon={secondIcon} />
                        </div>
                    )}
                </div>
            </div>
            <h4 className="card-title">{name}</h4>
            <p>{description}</p>
            <Modal open={open} onClose={onCloseModal} center>
                <h2>{intl.formatMessage({ id: "modal_title" })}</h2>
                <ul>
                    <li>{intl.formatMessage({ id: "modal_li_1" })}</li>
                    <li>{intl.formatMessage({ id: "modal_li_2" })}</li>
                    <li>{intl.formatMessage({ id: "modal_li_3" })}</li>
                    <li>{intl.formatMessage({ id: "modal_li_4" })}</li>
                </ul>
            </Modal>
        </div>
    );
};

export default FeatureCard;
