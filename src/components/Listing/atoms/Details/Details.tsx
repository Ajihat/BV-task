import styled from 'styled-components';

import { DetailsProps, AllProps, LastProps } from './Details.types';

export const Details = ({ date, discountPrice, regularPrice, isLastMinute, isAllInclusive }: DetailsProps) => {
	const areBothPromotions = isLastMinute && isAllInclusive;
	return (
		<Container>
			<LeftSide>
				<Date>{date}</Date>
				<Inner>
					{isLastMinute && <Last areBothPromotions={areBothPromotions}>Last minute</Last>}
					{isAllInclusive && <All areBothPromotions={areBothPromotions}>All inclusive</All>}
				</Inner>
			</LeftSide>
			<RightSide>
				{discountPrice && <DiscountPrice>{regularPrice}</DiscountPrice>}
				<ActualPrice>{discountPrice ? discountPrice : regularPrice}</ActualPrice>
				<Typo>per person</Typo>
			</RightSide>
		</Container>
	);
};

const Container = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: flex-end;
	height: 57px;
`;

const LeftSide = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: stretch;
	align-self: stretch;
	padding-top: 16px;
	width: calc(100% - 80px);
	flex-grow: 1;
`;

const RightSide = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	align-items: flex-start;
	width: 80px;
	text-align: right;
`;

const Date = styled.p`
	font-size: 14px;
	font-weight: 700;
	color: rgb(70, 70, 70);
`;

const DiscountPrice = styled.p`
	width: 100%;
	text-align: right;
	color: #ff5353;
	font-weight: 600;
	font-size: 1.3rem;
	text-decoration: line-through;
`;

const ActualPrice = styled.p`
	font-size: 1.6rem;
	color: rgb(70, 70, 70);
	font-weight: 700;
	width: 100%;
	margin-top: 3px;
`;

const Typo = styled.p`
	color: rgb(70, 70, 70);
	font-size: 1.3rem;
	width: 100%;
	margin-top: 3px;
`;

const Last = styled.p<LastProps>`
	color: #ff5353;
	font-size: 1.4rem;
	font-weight: 600;
	padding-right: ${(props) => (props.areBothPromotions ? '10px' : '0')};
	text-align: center;
`;

const Inner = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
`;

const All = styled.p<AllProps>`
	font-size: 1.4rem;
	color: rgb(120, 120, 120);
	font-weight: 500;
	padding-left: ${(props) => (props.areBothPromotions ? '10px' : '0')};
	border-left-width: ${(props) => (props.areBothPromotions ? '1px' : '0')};
	border-left-color: rgb(120, 120, 120);
	border-left-style: solid;
	text-align: center;
`;
