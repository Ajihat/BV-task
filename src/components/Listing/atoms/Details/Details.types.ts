export interface DetailsProps {
	date: string;
	discountPrice: string | null;
	regularPrice: string;
	isLastMinute: boolean;
	isAllInclusive: boolean;
}

export interface LastProps {
	areBothPromotions: boolean;
}

export interface AllProps {
	areBothPromotions: boolean;
}
