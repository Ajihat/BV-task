import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
	res.status(200).json([
		{
			id: 1,
			destination: 'Egypt',
			picture: 'https://raw.githubusercontent.com/Ajihat/images/main/Egypt.jpg',
			hotels: [
				{
					name: 'Nubia Aqua Beach Resort',
					stars: 3,
					date: '18.11.2022',
					isLastMinute: true,
					isAllInclusive: true,
					regularPrice: '2,999 pln',
					discountPrice: null,
				},
				{
					name: 'Hilton Beach',
					stars: 4,
					date: '18.11.2022',
					isLastMinute: true,
					isAllInclusive: true,
					regularPrice: '2,999 pln',
					discountPrice: '2399 pln',
				},
				{
					name: 'Beach Resort',
					stars: 4,
					date: '18.11.2022',
					isLastMinute: true,
					isAllInclusive: true,
					regularPrice: '2,999 pln',
					discountPrice: '2399 pln',
				},
				{
					name: 'Sunny Palace',
					stars: 5,
					date: '18.11.2022',
					isLastMinute: true,
					isAllInclusive: true,
					regularPrice: '2,999 pln',
					discountPrice: '2399 pln',
				},
				{
					name: 'Nubia Aqua Beach Resort',
					stars: 3,
					date: '18.11.2022',
					isLastMinute: true,
					isAllInclusive: true,
					regularPrice: '2,999 pln',
					discountPrice: '2399 pln',
				},
				{
					name: 'Hilton',
					stars: 4,
					date: '18.11.2022',
					isLastMinute: true,
					isAllInclusive: true,
					regularPrice: '2,999 pln',
					discountPrice: '2399 pln',
				},
			],
		},
		{
			destination: 'Greece',
			id: 2,
			picture: 'https://raw.githubusercontent.com/Ajihat/images/main/Greece.jpg',
			hotels: [
				{
					name: 'Aqua Beach',
					stars: 4,
					date: '18.11.2022',
					isLastMinute: true,
					isAllInclusive: false,
					regularPrice: '3,999 pln',
					discountPrice: null,
				},
				{
					name: 'Nubia Aqua',
					stars: 5,
					date: '18.11.2022',
					isLastMinute: true,
					isAllInclusive: true,
					regularPrice: '2,999 pln',
					discountPrice: '2399 pln',
				},
				{
					name: 'Sunny Resort',
					stars: 3,
					date: '22.12.2022',
					isLastMinute: false,
					isAllInclusive: true,
					regularPrice: '2,999 pln',
					discountPrice: '2399 pln',
				},
				{
					name: 'Sunny Palace',
					stars: 5,
					date: '18.11.2022',
					isLastMinute: true,
					isAllInclusive: true,
					regularPrice: '2,999 pln',
					discountPrice: '2399 pln',
				},
				{
					name: 'Green Hotel',
					stars: 4,
					date: '18.11.2022',
					isLastMinute: false,
					isAllInclusive: true,
					regularPrice: '2,999 pln',
					discountPrice: '2399 pln',
				},
				{
					name: 'Hilton',
					stars: 5,
					date: '18.11.2022',
					isLastMinute: false,
					isAllInclusive: true,
					regularPrice: '2,999 pln',
					discountPrice: '2399 pln',
				},
			],
		},
		{
			destination: 'Maroko',
			id: 3,
			picture: 'https://raw.githubusercontent.com/Ajihat/images/main/Maroko.jpg',
			hotels: [
				{
					name: 'Nubia Aqua Beach Resort',
					stars: 3,
					date: '18.11.2022',
					isLastMinute: true,
					isAllInclusive: true,
					regularPrice: '2,999 pln',
					discountPrice: null,
				},
				{
					name: 'Green Hotel',
					stars: 3,
					date: '18.11.2022',
					isLastMinute: true,
					isAllInclusive: true,
					regularPrice: '2,999 pln',
					discountPrice: '2399 pln',
				},
				{
					name: 'Beach Resort',
					stars: 5,
					date: '18.11.2022',
					isLastMinute: true,
					isAllInclusive: true,
					regularPrice: '2,999 pln',
					discountPrice: '2399 pln',
				},
				{
					name: 'Sunny Palace',
					stars: 5,
					date: '18.11.2022',
					isLastMinute: true,
					isAllInclusive: true,
					regularPrice: '2,999 pln',
					discountPrice: '2399 pln',
				},
				{
					name: 'Nubia Aqua',
					stars: 5,
					date: '18.11.2022',
					isLastMinute: true,
					isAllInclusive: true,
					regularPrice: '2,999 pln',
					discountPrice: '2399 pln',
				},
				{
					name: 'Sunny Resort',
					stars: 3,
					date: '22.12.2022',
					isLastMinute: false,
					isAllInclusive: true,
					regularPrice: '2,999 pln',
					discountPrice: '2399 pln',
				},
			],
		},
	]);
}
