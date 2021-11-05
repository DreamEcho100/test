import MainLayout from '@components/Layouts/MainLayout';
import FeaturedMedia from '@components/UI/V1/FeaturedMedia';
import MediaRow from '@components/UI/V1/MediaRow';

interface Props {}

const Root = (props: Props): JSX.Element => {
	return (
		<MainLayout>
			<FeaturedMedia />
			<MediaRow title='Movies' type='large-v' endpoint='api/movies/234' />
		</MainLayout>
	);
};

export default Root;
