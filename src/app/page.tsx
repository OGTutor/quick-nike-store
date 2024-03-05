import Hero from '@/components/Home/Hero';
import Sales from '@/components/Home/Sales';
import { heroApi, popularSales, topRateSales } from '@/constants';

export default function Home() {
	return (
		<>
			<Hero hero={{ ...heroApi }} />
			<Sales endpoint={popularSales} />
			<Sales endpoint={topRateSales} />
		</>
	);
}
