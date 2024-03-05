import { HeroApiProps } from '@/types';
import Image from 'next/image';
import { FC } from 'react';
import Clip from './ui/Clip';
import SocialLink from './ui/SocialLink';

interface HeroProps {
	hero: HeroApiProps;
}

const Hero: FC<HeroProps> = ({ hero }) => {
	const { btnText, img, socialLinks, subtitle, title, videos } = hero;

	return (
		<div className="relative h-auto w-auto flex flex-col">
			<div
				className="bg-theme clip-path
				h-[85vh] lg:h-[75vh] md:h-[65vh] sm:h-[55vh]
				w-auto absolute top-0 left-0 right-0 opacity-100 z-10"
			></div>
			<div className="relative opacity-100 z-20 grid items-center justify-items-center w-11/12 m-auto">
				<div className="grid items-center justify-items-center mt-28 md:mt-24">
					<h1 className="text-6xl lg:text-5xl md:text-4xl sm:text-3xl xsm:text-2xl font-extrabold filter drop-shadow-sm text-slate-200">
						{title}
					</h1>
					<h2 className="text-6xl lg:text-5xl md:text-4xl sm:text-3xl xsm:text-2xl font-extrabold filter drop-shadow-sm text-slate-200">
						{subtitle}
					</h2>
					<button
						type="button"
						className="px-7 py-1 active:scale-90 transition-all duration-100 ease-in-out shadow-md sm:text-sm bg-slate-200 shadow-slate-200 rounded-xl my-5
						text-black font-semibold"
					>
						{btnText}
					</button>
					<div
						className="grid items-center gap-5 md:gap-3 absolute top-[33vh] lg:top-[27vh]
						left-[11%] xl:left-0 w-auto h-auto"
					>
						{videos?.map((video, idx) => (
							<Clip key={idx} imgSrc={video.imgSrc} />
						))}
					</div>
					<div className="grid items-center absolute top-[33vh] lg:top-[27vh] right-0 gap-3">
						{socialLinks?.map((link, idx) => (
							<SocialLink key={idx} icon={link.icon} />
						))}
					</div>
				</div>
				<div>
					<Image
						src={img}
						alt="hero"
						draggable={false}
						priority
						className="w-auto h-[45vh] lg:h-[35vh] md:h-[31vh] sm:h-[21vh] xsm:h-[19vh] transition-all duration-700 ease-in-out cursor-pointer -rotate-[25deg] hover:rotate-0 object-fill"
					/>
				</div>
			</div>
		</div>
	);
};

export default Hero;
