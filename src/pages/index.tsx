import { Wrapper, Heading, InnerWrapper, Loader, ErrorSign, Widget } from 'components';

import { useDetectDevice } from 'customHooks/useDetectDevice';
import { useGetTrips } from 'customHooks/useGetTrips';

export default function Home() {
	const isMobile = useDetectDevice();
	const { isError, isLoading, apiResponse } = useGetTrips();

	return (
		<Wrapper>
			<Heading />
			<InnerWrapper isMobile={isMobile}>
				{isLoading && <Loader />}
				{isError && <ErrorSign />}
				{apiResponse && <Widget isMobile={isMobile} trips={apiResponse} />}
			</InnerWrapper>
		</Wrapper>
	);
}
