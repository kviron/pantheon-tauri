import { Layout } from 'antd';
import { LibraryPageSidebar } from '../Sidebar';
import css from './LibraryPage.module.scss';
import { useCallback, useEffect, useRef, useState } from 'react';
import cl from 'classnames';

const { Content, Sider } = Layout;

export const LibraryPage = () => {
    const sidebarRef = useRef(null);
    const [isResizing, setIsResizing] = useState(false);
    const [sidebarWidth, setSidebarWidth] = useState(268);

    const startResizing = useCallback(mouseDownEvent => {
        setIsResizing(true);
    }, []);

    const stopResizing = useCallback(() => {
        setIsResizing(false);
    }, []);

    const resize = useCallback(
        mouseMoveEvent => {
            if (isResizing) {
                const newWidth = mouseMoveEvent.clientX - sidebarRef.current.getBoundingClientRect().left;
                if (newWidth > 200 && newWidth < 600) {
                    setSidebarWidth(newWidth);
                }
                document.body.style.userSelect = 'none';
                document.body.style.cursor = 'col-resize';
            } else {
                document.body.style.userSelect = '';
                document.body.style.cursor = '';
            }
        },
        [isResizing],
    );

    useEffect(() => {
        window.addEventListener('mousemove', resize);
        window.addEventListener('mouseup', stopResizing);
        return () => {
            window.removeEventListener('mousemove', resize);
            window.removeEventListener('mouseup', stopResizing);
        };
    }, [resize, stopResizing]);

    return (
        <Layout style={{ display: 'flex' }}>
            <Sider
                ref={sidebarRef}
                className={css.sidebar}
                width={sidebarWidth}
                style={{ transition: 'none' }}
            >
                <div
                    className={cl(css.resizeHandle, { [css.resize]: isResizing })}
                    onMouseDown={startResizing}
                ></div>
                <LibraryPageSidebar />
            </Sider>
            <Content className={css.content}>Контент</Content>
        </Layout>
    );
};
