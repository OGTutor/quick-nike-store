import { PlayIcon } from '@heroicons/react/24/outline';
import Image, { StaticImageData } from 'next/image';
import { FC } from 'react';

interface ClipProps {
	imgSrc: StaticImageData;
}

const Clip: FC<ClipProps> = ({ imgSrc }) => {
	return (
		<div className="relative h-28 w-32 rounded-xl overflow-hidden group cursor-pointer transition-all duration-300 lg:w-28 md:w-24 sm:w-16 lg:h-24 md:h-20 sm:h-14">
			<Image
				src={imgSrc}
				alt="preview video"
				className="inset-0 flex h-full w-full object-cover absolute top-0 left-0 right-0 rounded-xl opacity-100 z-10 transition-opacity duration-500"
			/>
			<div className="bg-white/50 bg-clip-padding backdrop-filter backdrop-blur bg-opacity-50 opacity-100 z-[100] shadow-sm shadow-slate-100 transition-all duration-300 absolute top-11 left-11 lg:top-8 lg:left-9 sm:top-4 sm:left-5 w-8 h-8 md:w-5 md:h-5 flex items-center justify-center rounded-full">
				<PlayIcon className="h-6 w-6 md:w-5 md:h-5 sm:h-4 sm:w-4 text-slate-900 cursor-pointer transition-all duration-100 active:scale-110 leading-tight" />
			</div>
			<video
				width="320"
				height="240"
				autoPlay
				loop
				muted
				playsInline
				preload="none"
				className="absolute top-0 left-0 right-0 flex h-full w-full object-cover opacity-0 z-0 group-hover:opacity-100 group-hover:z-50 rounded-xl"
			>
				<source src="/videos/clip.mp4" type="video/mp4" />
				Your browser does not support the video tag.
			</video>
		</div>
	);
};

export default Clip;
