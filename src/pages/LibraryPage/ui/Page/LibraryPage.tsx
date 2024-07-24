import { Layout } from 'antd';
import { LibraryPageSidebar } from '../Sidebar';
import css from './LibraryPage.module.scss';

const { Content } = Layout;

export const LibraryPage = () => {
    return (
        <Layout style={{ display: 'flex' }}>
            <LibraryPageSidebar />
            <Content className={css.content}>Контент</Content>
        </Layout>
    );
};
