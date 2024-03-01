import { StaticImageData } from 'next/image';

export type ColorType =
	| 'blue_indigo'
	| 'red'
	| 'violet'
	| 'blue'
	| 'green'
	| 'orange'
	| 'yellow'
	| 'cyan'
	| 'dark_yellow'
	| 'brown_orange'
	| 'indigo'
	| 'green_lime'
	| 'slate_black'
	| 'dark_blue';

interface Video {
	imgSrc: StaticImageData;
	clip: string;
}

interface SocialLinks {
	icon: string;
}

export interface ProductItem {
	id: string;
	title: string;
	text: string;
	rating: string;
	btn: string;
	img: StaticImageData;
	price: string;
	color: ColorType;
}

interface NewItem {
	title: string;
	text: string;
	img: string;
	url: string;
	like: string;
	time: string;
	by: string;
	btn: string;
}

interface FooterApiTitle {
	title: string;
}

interface FooterApiLink {
	link: string;
}

export interface HeroApiProps {
	title: string;
	subtitle: string;
	img: StaticImageData;
	btnText: string;
	videos: Video[];
	socialLinks: SocialLinks[];
}

export interface PopularSalesProps {
	title: string;
	items: ProductItem[];
}

export interface HighlightProps {
	heading: string;
	title: string;
	text: string;
	btn: string;
	url: string;
	img: StaticImageData;
}

export interface SneakerProps {
	heading: string;
	title: string;
	text: string;
	btn: string;
	url: string;
	img: StaticImageData;
}

export interface TopRateSalesProps {
	title: string;
	items: ProductItem[];
}

export interface StoryProps {
	title: string;
	news: NewItem[];
}

export interface FooterApiProps {
	titles: FooterApiTitle[];
	links: [FooterApiLink[], FooterApiLink[], FooterApiLink[]];
}
