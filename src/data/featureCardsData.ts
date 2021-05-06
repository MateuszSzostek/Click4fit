import cameraIcon from "@iconify-icons/bytesize/camera";
import calendarIcon from "@iconify-icons/cil/calendar";
import camrecorderIcon from "@iconify-icons/simple-line-icons/camrecorder";
import checkCircle from "@iconify-icons/cil/check-circle";
import walletIcon from "@iconify-icons/simple-line-icons/wallet";
import basketLoaded from "@iconify-icons/simple-line-icons/basket-loaded";
import bubblesIcon from "@iconify-icons/simple-line-icons/bubbles";
import paperPlane from "@iconify-icons/simple-line-icons/paper-plane";
import userFollowing from "@iconify-icons/simple-line-icons/user-following";
import infoCircled from "@iconify-icons/radix-icons/info-circled";

import { useIntl } from "gatsby-plugin-react-intl";

export const cardsData = () => {
    const intl = useIntl();
    return [
        {
            id: 1,
            icon: calendarIcon,
            secondIcon: infoCircled,
            name: intl.formatMessage({
                id: "card_1_title",
            }),
            description: intl.formatMessage({
                id: "card_1_description",
            }),
        },
        {
            id: 2,
            icon: cameraIcon,
            name: intl.formatMessage({
                id: "card_2_title",
            }),
            description: intl.formatMessage({
                id: "card_2_description",
            }),
        },
        {
            id: 3,
            icon: camrecorderIcon,
            name: intl.formatMessage({
                id: "card_3_title",
            }),
            description: intl.formatMessage({
                id: "card_3_description",
            }),
        },
        {
            id: 4,
            icon: checkCircle,
            name: intl.formatMessage({
                id: "card_4_title",
            }),
            description: intl.formatMessage({
                id: "card_4_description",
            }),
        },
        {
            id: 5,
            icon: walletIcon,
            name: intl.formatMessage({
                id: "card_5_title",
            }),
            description: intl.formatMessage({
                id: "card_5_description",
            }),
        },
        {
            id: 6,
            icon: basketLoaded,
            name: intl.formatMessage({
                id: "card_6_title",
            }),
            description: intl.formatMessage({
                id: "card_6_description",
            }),
        },
        {
            id: 7,
            icon: bubblesIcon,
            name: intl.formatMessage({
                id: "card_7_title",
            }),
            description: intl.formatMessage({
                id: "card_7_description",
            }),
        },
        {
            id: 8,
            icon: paperPlane,
            name: intl.formatMessage({
                id: "card_8_title",
            }),
            description: intl.formatMessage({
                id: "card_8_description",
            }),
        },
        {
            id: 9,
            icon: userFollowing,
            name: intl.formatMessage({
                id: "card_9_title",
            }),
            description: intl.formatMessage({
                id: "card_9_description",
            }),
        },
    ];
};
