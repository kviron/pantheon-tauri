import { useParams } from '@solidjs/router';

const AppDetailsPage = () => {
    const { id } = useParams<{ id: string }>();

    return <div>Страница игры id: {id}</div>;
};

export default AppDetailsPage;
