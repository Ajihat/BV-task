import styled from 'styled-components';
import { WrapperProps } from './Wrapper.types';

export const Wrapper = ({ children }: WrapperProps) => {
	return <Conatainer>{children}</Conatainer>;
};

const Conatainer = styled.div`
	max-width: 1256px;
	padding: 0 20px 50px 20px;
	margin: 0 auto;
`;
