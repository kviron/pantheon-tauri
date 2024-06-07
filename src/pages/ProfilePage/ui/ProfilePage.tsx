import { useParams } from '@solidjs/router';

const ProfilePage = () => {
    const { id } = useParams<{ id: string }>();

    return <div>Страница профиля id: {id}</div>;
};

export default ProfilePage;
