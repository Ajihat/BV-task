import { Button } from 'components/Button/Button';
import styled from 'styled-components';

export const Heading = () => {
	return (
		<Container>
			<Typo>Big saving on all inclusive trips</Typo>
			<BtnHolder>
				<Button url='#' />
			</BtnHolder>
		</Container>
	);
};

const Container = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 30px 0 48px 0;
`;

const Typo = styled.h1`
	font-size: 3.2rem;
	font-weight: bold;
	@media (max-width: 768px) {
		font-size: 2rem;
	}
`;

const BtnHolder = styled.div`
	text-align: center;
	@media (max-width: 768px) {
		display: none;
	}
`;
