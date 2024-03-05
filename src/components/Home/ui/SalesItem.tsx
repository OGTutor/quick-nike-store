import { cn } from '@/lib/utils';
import { ColorType } from '@/types';
import { ShoppingBagIcon, StarIcon } from '@heroicons/react/24/outline';
import Image, { StaticImageData } from 'next/image';
import { FC } from 'react';

interface SalesItemProps {
	id: string;
	title: string;
	text: string;
	rating: string;
	btn: string;
	img: StaticImageData;
	price: string;
	color: ColorType;
}

const IS_BLUE_INDIGO =
	'bg-gradient-to-b from-blue-600 to-blue-500 shadow-lg shadow-blue-500';
const IS_RED =
	'bg-gradient-to-b from-red-500 to-rose-500 shadow-lg shadow-rose-500';
const IS_VIOLET =
	'bg-gradient-to-b from-violet-500 to-indigo-500 shadow-lg shadow-violet-500';
const IS_BLUE =
	'bg-gradient-to-b from-sky-600 to-indigo-600 shadow-lg shadow-blue-500';
const IS_GREEN =
	'bg-gradient-to-b from-green-500 to-emerald-500 shadow-lg shadow-green-500';
const IS_ORANGE =
	'bg-gradient-to-b from-orange-500 to-amber-500 shadow-lg shadow-orange-500';
const IS_YELLOW =
	'bg-gradient-to-b from-gray-900 to-yellow-500 shadow-lg shadow-yellow-500';
const IS_CYAN =
	'bg-gradient-to-b from-blue-500 to-cyan-500 shadow-lg shadow-cyan-500';
const IS_BRIGHT_YELLOW =
	'bg-gradient-to-b from-yellow-500 to-yellow-500 shadow-lg shadow-yellow-500';
const IS_BROWN_ORANGE =
	'bg-gradient-to-b from-[#936550] to-orange-900 shadow-lg shadow-orange-800';
const IS_INDIGO =
	'bg-gradient-to-b from-indigo-700 to-indigo-700 shadow-lg shadow-indigo-500';
const IS_GREEN_LIME =
	'bg-gradient-to-b from-green-600 to-lime-500 shadow-lg shadow-lime-500';
const IS_SLATE_BLACK =
	'bg-gradient-to-b from-slate-900 to-black shadow-lg shadow-black';
const IS_DARK_BLUE =
	'bg-gradient-to-b from-blue-900 to-blue-500 shadow-lg shadow-blue-500';

const SalesItem: FC<SalesItemProps> = ({
	btn,
	color,
	id,
	img,
	price,
	rating,
	text,
	title,
}) => {
	function determineTheColor(color: ColorType) {
		switch (color) {
			case 'blue_indigo':
				return IS_BLUE_INDIGO;
			case 'red':
				return IS_RED;
			case 'violet':
				return IS_VIOLET;
			case 'blue':
				return IS_BLUE;
			case 'green':
				return IS_GREEN;
			case 'orange':
				return IS_ORANGE;
			case 'yellow':
				return IS_YELLOW;
			case 'cyan':
				return IS_CYAN;
			case 'dark_yellow':
				return IS_BRIGHT_YELLOW;
			case 'brown_orange':
				return IS_BROWN_ORANGE;
			case 'indigo':
				return IS_INDIGO;
			case 'green_lime':
				return IS_GREEN_LIME;
			case 'slate_black':
				return IS_SLATE_BLACK;
			case 'dark_blue':
				return IS_DARK_BLUE;

			default:
				break;
		}
	}
	return (
		<div
			className={cn(
				`relative bg-gradient-to-b grid items-center justify-items-center
				rounded-xl py-4 px-5 transition-all duration-700 ease-in-out w-full hover:scale-105
				${determineTheColor(color)} custom-card-item`
			)}
		>
			<div className="grid items-center justify-items-center">
				<h1 className="text-slate-200 text-xl lg:text-lg md:text-base font-medium filter drop-shadow">
					{title}
				</h1>
				<p className="text-slate-200 filter drop-shadow text-base md:text-sm font-normal">
					{text}
				</p>
				<div className="flex items-center justify-between w-28 my-2">
					<div className="flex items-center bg-white/80 px-1 rounded bg-clip-padding backdrop-filter backdrop-blur bg-opacity-50 opacity-100 z-[100] shadow-sm shadow-slate-100 transition-all duration-300">
						<h2 className="text-black text-sm font-medium">
							{price}
						</h2>
					</div>
					<div className="flex items-center gap-1">
						<StarIcon className="h-5 w-5 md:h-4 md:w-4 cursor-pointer transition-all duration-100 active:scale-110 leading-tight" />
						<h2 className="md:text-sm font-normal text-slate-100">
							{rating}
						</h2>
					</div>
				</div>
				<div className="flex items-center gap-3">
					<button
						type="button"
						className="bg-white/90 bg-clip-padding backdrop-filter backdrop-blur bg-opacity-50 opacity-100 z-[100] transition-all duration-300
						rounded active:scale-90 ease-in-out sm:text-sm p-0.5 shadow
						shadow-slate-200"
					>
						<ShoppingBagIcon className="h-6 w-6 sm:h-5 sm:w-5 cursor-pointer transition-all duration-100 active:scale-110 leading-tight text-slate-900" />
					</button>
					<button
						type="button"
						className="bg-white/90 bg-clip-padding backdrop-filter backdrop-blur bg-opacity-50 opacity-100 z-[100] transition-all duration-300
						px-4 py-1.5 rounded active:scale-90 ease-in-out sm:text-sm shadow
						shadow-slate-200 text-sm text-black"
					>
						{btn}
					</button>
				</div>
			</div>
			<div className="flex items-center">
				<Image
					draggable={false}
					src={img}
					alt="sales item image"
					className="h-36 w-64 transition-all duration-700 ease-in-out cursor-pointer hover:-rotate-12"
				/>
			</div>
		</div>
	);
};

export default SalesItem;
