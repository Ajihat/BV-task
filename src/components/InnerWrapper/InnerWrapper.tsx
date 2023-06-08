import styled from 'styled-components';
import { InnerWrapperProps, WrapperProps } from './InnerWrapper.types';

export const InnerWrapper = ({ children, isMobile }: InnerWrapperProps) => {
	return <Wrapper isMobile={isMobile}>{children}</Wrapper>;
};

const Wrapper = styled.div<WrapperProps>`
	display: flex;
	justify-content: ${(props) => (props.isMobile ? 'center' : 'space-between')};
	align-items: flex-start;
	position: relative;
	min-height: 50vh;
	@media (max-width: 1024px) {
		flex-direction: column;
	}
`;
