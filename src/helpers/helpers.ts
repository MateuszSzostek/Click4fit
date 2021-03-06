export interface IButtonProps {
    isAnimated?: boolean;
    animatedText?: string;
    slug?: string;
}
export interface IFeatureCardProps {
    name: string;
    description: string;
    icon: any;
    secondIcon?: any;
}

export interface IHeadProps {
    title: string;
    description?: string;
    keywords?: string;
    author?: string;
}
export interface IMobMenuProps {
    menuActive: boolean;
    toggleMenu: Function;
}
export interface IPostCardProps {
    title: string;
    slug: string;
    shortDesc: string;
}
