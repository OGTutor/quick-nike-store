import heroImg from '/public/images/hero.png';

import hightLightImg from '/public/images/hightLightImg.png';
import sneakerShoe from '/public/images/sneaker.png';

import vCover1 from '/public/videos/vCover1.png';
import vCover2 from '/public/videos/vCover2.png';
import vCover3 from '/public/videos/vCover3.png';

import pSale3 from '/public/images/nike-adapt-bb-smart.png';
import pSale2 from '/public/images/nike-adapt-bb.png';
import pSale1 from '/public/images/nike-air-red.png';

import product1 from '/public/images/product1.png';
import product10 from '/public/images/product10.png';
import product11 from '/public/images/product11.png';
import product12 from '/public/images/product12.png';
import product2 from '/public/images/product2.png';
import product3 from '/public/images/product3.png';
import product4 from '/public/images/product4.png';
import product5 from '/public/images/product5.png';
import product6 from '/public/images/product6.png';
import product7 from '/public/images/product7.png';
import product8 from '/public/images/product8.png';
import product9 from '/public/images/product9.png';

import {
	FooterApiProps,
	HeroApiProps,
	HighlightProps,
	PopularSalesProps,
	SneakerProps,
	StoryProps,
	TopRateSalesProps,
} from '@/types';
import facebook from '/public/images/facebook.svg';
import instagram from '/public/images/instagram.svg';
import messenger from '/public/images/messenger.svg';
import twitter from '/public/images/twitter.svg';
import youtube from '/public/images/youtube.svg';

const heroApi: HeroApiProps = {
	title: 'Play With Electric Nike',
	subtitle: 'Adapt 2.0 Sneakers',
	img: heroImg,
	btnText: 'Explore Product',
	videos: [
		{ imgSrc: vCover1, clip: 'clip' },
		{ imgSrc: vCover2, clip: 'clip' },
		{ imgSrc: vCover3, clip: 'clip' },
	],
	socialLinks: [
		{ icon: facebook },
		{ icon: messenger },
		{ icon: instagram },
		{ icon: twitter },
		{ icon: youtube },
	],
};

const popularSales: PopularSalesProps = {
	title: 'Popular Sales',
	items: [
		{
			id: '0p0x1',
			title: 'Nike Adapt BB 2.0',
			text: 'MEN Running Shoes',
			rating: '4.9',
			btn: 'Buy Now',
			img: pSale2,
			price: '200',
			color: 'blue_indigo',
		},
		{
			id: '0p0x2',
			title: 'Nike Martin Rose',
			text: 'MEN Running Shoes',
			rating: '4.5',
			btn: 'Buy Now',
			img: pSale1,
			price: '200',
			color: 'red',
		},
		{
			id: '0p0x3',
			title: 'Nike Smart Shoe 2.0',
			text: 'MEN Running Shoes',
			rating: '5+',
			btn: 'Buy Now',
			img: pSale3,
			price: '200',
			color: 'violet',
		},
	],
};

const highlight: HighlightProps = {
	heading: 'HIGHLIGHTS',
	title: 'NIKE AIR WITH LIMITLESS CHOICES',
	text: 'Our Purpose is to move the world forward. We take action by building community, protecting our planet and increasing access to sport.',
	btn: 'Explore More',
	url: 'https://www.nike.com/launch/t/nocta-hot-step-black-gold',
	img: hightLightImg,
};

const sneaker: SneakerProps = {
	heading: 'FEATURED',
	title: 'NIKE SNEAKERS AIR LANCING SHOES',
	text: 'The radiance lives on Nike Sneakers Air Lancing Shoes, the basket ball OG that puts a fresh spin on what you know best: durably stitched overlays, clean finishes and the perfect amount of flash to make you shine.',
	btn: 'Explore More',
	url: 'https://sneakernews.com/2022/03/21/nike-lebron-2-retro-white-midnight-navy-varsity-crimson-dr0826-100/',
	img: sneakerShoe,
};

const topRateSales: TopRateSalesProps = {
	title: 'Top Rated Sales',
	items: [
		{
			id: '0M0x1',
			title: 'Nike Air Low Premium',
			text: 'MEN Running Shoes',
			rating: '5+',
			btn: 'Buy Now',
			img: product7,
			price: '150',
			color: 'blue',
		},
		{
			id: '0M0x2',
			title: 'Nike Air Force Green',
			text: 'MEN Running Shoes',
			rating: '5+',
			btn: 'Buy Now',
			img: product2,
			price: '150',
			color: 'green',
		},
		{
			id: '0M0x3',
			title: 'Nike Adapt BB Rose',
			text: 'MEN Running Shoes',
			rating: '5+',
			btn: 'Buy Now',
			img: product3,
			price: '150',
			color: 'red',
		},
		{
			id: '0M0x4',
			title: 'Nike Air Premium',
			text: 'MEN Running Shoes',
			rating: '5+',
			btn: 'Buy Now',
			img: product4,
			price: '150',
			color: 'orange',
		},
		{
			id: '0M0x5',
			title: 'Nike Adapt BB Pro',
			text: 'MEN Running Shoes',
			rating: '5+',
			btn: 'Buy Now',
			img: product5,
			price: '150',
			color: 'yellow',
		},
		{
			id: '0M0x6',
			title: 'Air Jordan PR3',
			text: 'MEN Running Shoes',
			rating: '5+',
			btn: 'Buy Now',
			img: product6,
			price: '150',
			color: 'cyan',
		},
		{
			id: '0M0x7',
			title: 'Nike Multi Smart Shoe',
			text: 'MEN Running Shoes',
			rating: '5+',
			btn: 'Buy Now',
			img: product1,
			price: '150',
			color: 'dark_yellow',
		},
		{
			id: '0M0x8',
			title: 'Nike Jordan Air Max',
			text: 'MEN Running Shoes',
			rating: '5+',
			btn: 'Buy Now',
			img: product9,
			price: '150',
			color: 'brown_orange',
		},
		{
			id: '0M0x9',
			title: 'Nike Old Max-x',
			text: 'MEN Running Shoes',
			rating: '5+',
			btn: 'Buy Now',
			img: product10,
			price: '150',
			color: 'indigo',
		},
		{
			id: '0M0x10',
			title: 'Nike Lime Jordan 11',
			text: 'MEN Running Shoes',
			rating: '5+',
			btn: 'Buy Now',
			img: product12,
			price: '150',
			color: 'green_lime',
		},
		{
			id: '0M0x11',
			title: 'Nike Air Black Max',
			text: 'MEN Running Shoes',
			rating: '5+',
			btn: 'Buy Now',
			img: product11,
			price: '150',
			color: 'slate_black',
		},
		{
			id: '0M0x12',
			title: 'Nike Zoom Max',
			text: 'MEN Running Shoes',
			rating: '5+',
			btn: 'Buy Now',
			img: product8,
			price: '150',
			color: 'dark_blue',
		},
	],
};

const story: StoryProps = {
	title: 'Top Stories',
	news: [
		{
			title: 'Jayson Tatum Debuts',
			text: 'Jordan Brands signature model for the past few years, Jayson Tatum will be dawning the Air Jordan 37 this season before attaining potentially his first signature sneaker with JUMPMAN, which he rumored to be in the works recently via his Twitter.',
			img: 'https://sneakernews.com/wp-content/uploads/2022/09/air-jordan-37-low.jpg?w=540&h=380&crop=1',
			url: 'https://sneakernews.com/2022/09/14/air-jordan-37-low/',
			like: '3/5',
			time: '11 Mins',
			by: 'Jared Leto',
			btn: 'Read More',
		},
		{
			title: 'Bro’s Nike Zoom Freak 4',
			text: 'Arriving right time for the Fall, this upcoming take on the Zoom Freak 4 seemingly draws inspiration from Thanksgiving. Orange and brown, two staples of the holiday, are used throughout the upper, dressing the parts not bathed in shades of grey.',
			img: 'https://sneakernews.com/wp-content/uploads/2022/09/nike-zoom-freak-4-ironstone-orange-trance-cobblestone-sail-dj6149-003-2.jpg?w=540&h=380&crop=1',
			time: '41 Mins',
			like: '5/5',
			url: 'https://sneakernews.com/2022/09/14/nike-zoom-freak-4-ironstone-orange-trance-cobblestone-sail-dj6149-003/',
			by: 'Michael Le',
			btn: 'Read More',
		},
		{
			title: 'Nike Air Max Plus',
			text: 'The Nike Air Max Plus has enjoyed the reveal of several colorways these last few of months. And as we officially embark on the Fall season, an additional set have been added to the calendar, including this newly-revealed grey and orange colorway.',
			img: 'https://sneakernews.com/wp-content/uploads/2022/09/Nike-Air-Max-Plus-FB3358-001-2.jpg?w=540&h=380&crop=1',
			time: '2 Hours',
			url: 'https://sneakernews.com/2022/09/14/nike-air-max-plus-grey-orange-black-fb3358-001/',
			like: '5/5',
			by: 'Michael Le',
			btn: 'Read More',
		},
		{
			title: 'Air Jordan Retro High OG',
			text: 'Air Jordan Retro High OG popular series of AJ1s with the popular color-blocking with the original Yellow Toe flavor. The colorway was revealed back PE by musician Zach Myers, nearly four years later, Jordan fanatics will finally get their shot a GR release.',
			img: 'https://sneakernews.com/wp-content/uploads/2022/03/yellow-toe-jordan-1-release-date-2.jpg',
			time: '7 Months',
			url: 'https://sneakernews.com/2022/03/09/air-jordan-1-retro-high-og-yellow-toe-555088-711/',
			like: '5/5',
			by: 'Sneaker News',
			btn: 'Read More',
		},
		{
			title: 'Nike Air Zoom GT Cut 2',
			text: 'The Bred colorway of Zoom GT Cut 2 will be first to release this Friday, For Nike Members Nation World Wide while Sabrina Ionescu colorway is set for an October 13th release date. In the meantime, enjoy official images of both colorways below.',
			img: 'https://sneakernews.com/wp-content/uploads/2022/09/nike-zoom-gt-cut-2-release-date.jpg?w=540&h=380&crop=1',
			time: '1 Months',
			url: 'https://sneakernews.com/2022/09/13/nike-zoom-gt-cut-2-officially-unveiled/',
			like: '3/5',
			by: 'Jared Leto',
			btn: 'Read More',
		},
		{
			title: 'Puma Announces Breanna',
			text: 'For the first time in over a decade, a signature basketball silhouette is being made for one of the WNBA’s best and brightest stars, Olympic Gold Medalist and Seattle Storm superstar Breanna Stewart. Puma Stewie 1 Quiet Fire will be available this Friday.',
			img: 'https://sneakernews.com/wp-content/uploads/2022/09/puma-stewie-1-quiet-fire-breanna-stewart-release-date-lead.jpg?w=540&h=380&crop=1',
			time: '25 Days',
			url: 'https://sneakernews.com/2022/09/13/nike-zoom-gt-cut-2-officially-unveiled/',
			like: '3/5',
			by: 'Jared Leto',
			btn: 'Read More',
		},
		{
			title: 'Nike Air Force Orange Color',
			text: 'From lace toggles to city-inspired makeovers, the Nike Air Force 1 has delivered a number of unique modifications. Here though, the brand is taking things down quite a few notches, opting for a simple colorway helmed primarily by black and Laser Orange.',
			img: 'https://sneakernews.com/wp-content/uploads/2022/09/Nike-Air-Force-1-Black-Yellow-FB7162-081-8.jpg?w=540&h=380&crop=1',
			url: 'https://sneakernews.com/2022/09/09/nike-air-force-1-black-laser-orange-fb7162-081/',
			time: '6 Days',
			like: '4/5',
			by: 'Michael Le',
			btn: 'Read More',
		},
		{
			title: 'Hello Kitty and Adidas',
			text: 'The world of Sanrio is vast and replete with many an iconic character. Few among the family, though, rival the immense influence of Hello Kitty, who’s played mascot for everything from Pringles merchandise to sneaker collaborations.',
			img: 'https://sneakernews.com/wp-content/uploads/2022/09/hello-kitty-adidas-superstar-GW7168-2.jpg?w=540&h=380&crop=1',
			url: 'https://sneakernews.com/2022/09/08/hello-kitty-adidas-originals-gw7166-gw7167-gw7168/',
			time: '5 Days',
			like: '4/5',
			by: 'Michael Le',
			btn: 'Read More',
		},
		{
			title: 'Air Force 1 Low Expands',
			text: 'The nighttime aesthetic seen here is applied to the tumbled black leather panels of the upper and perforated mesh construction of the tongue while Royal trim and forefoot Swooshes provide additional intrigue to the darkened palette.',
			img: 'https://sneakernews.com/wp-content/uploads/2022/09/nike-air-force-1-low-worldwide-black-royal-fb1840-001-lead.jpg?w=540&h=380&crop=1',
			url: 'https://sneakernews.com/2022/09/08/nike-air-force-1-low-worldwide-black-royal-fb1840-001/',
			time: '5 Days',
			like: '4/5',
			by: 'Michael Le',
			btn: 'Read More',
		},
	],
};

const footerAPI: FooterApiProps = {
	titles: [
		{ title: 'About Nike' },
		{ title: 'Get Help' },
		{ title: 'Company' },
	],
	links: [
		[
			{ link: 'News' },
			{ link: 'Careers' },
			{ link: 'Investors' },
			{ link: 'Purpose' },
			{ link: 'Sustainability' },
		],
		[
			{ link: 'Order Status' },
			{ link: 'Shipping & Delivery' },
			{ link: 'Payment Options' },
			{ link: 'Gift Card Balance' },
			{ link: 'Contact Us' },
			{ link: 'FAQ' },
			{ link: 'Blog' },
		],
		[
			{ link: 'Gift Cards' },
			{ link: 'Promotions' },
			{ link: 'Find A Store' },
			{ link: 'Signup' },
			{ link: 'Nike Journal' },
			{ link: 'Send Us Feedback' },
		],
	],
};

export {
	footerAPI,
	heroApi,
	highlight,
	popularSales,
	sneaker,
	story,
	topRateSales,
};
