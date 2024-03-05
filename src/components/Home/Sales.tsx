import { PopularSalesProps } from '@/types';
import { FC } from 'react';
import SalesItem from './ui/SalesItem';
import Title from './ui/Title';

interface SalesProps {
	endpoint: PopularSalesProps;
}

const Sales: FC<SalesProps> = ({ endpoint }) => {
	const { items, title } = endpoint;

	return (
		<div className="w-11/12 m-auto">
			<Title title={title} />
			<div className="grid items-center justify-items-center grid-cols-4 xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-7 lg:gap-5 mt-7">
				{items?.map((item) => <SalesItem key={item.id} {...item} />)}
			</div>
		</div>
	);
};

export default Sales;
