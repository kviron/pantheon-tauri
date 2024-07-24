import { Input, List, Button, Avatar, Space } from 'antd';
import { SearchOutlined, PlusOutlined, UserOutlined } from '@ant-design/icons';
import { Resizer, Sidebar } from './controls.tsx';
import { useCallback, useEffect, useRef, useState } from 'react';

export const LibraryPageSidebar = () => {
    const data = ['Dota 2', 'The First Decendence', "Baldur's Gate 3", 'Asseto corsa', 'City Car Driving'];

    const sidebarRef = useRef<Nullable<HTMLDivElement>>(null);
    const [isResizing, setIsResizing] = useState(false);
    const [sidebarWidth, setSidebarWidth] = useState(268);

    const startResizing = useCallback(() => {
        setIsResizing(true);
    }, []);

    const stopResizing = useCallback(() => {
        setIsResizing(false);
    }, []);

    const resize = useCallback(
        (mouseMoveEvent: MouseEvent) => {
            if (isResizing && sidebarRef.current) {
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
        <Sidebar
            ref={sidebarRef}
            width={sidebarWidth}
            style={{ transition: 'none' }}
        >
            <div style={{ padding: '.5rem', display: 'flex', gap: '.5rem' }}>
                <Input
                    placeholder='Поиск'
                    prefix={<SearchOutlined />}
                />
                <Button type={'dashed'}>
                    <PlusOutlined />
                </Button>
            </div>
            {/*<div style={{ height: '100%' }}>*/}
            {/*    <Empty*/}
            {/*        image={Empty.PRESENTED_IMAGE_SIMPLE}*/}
            {/*        description={'Здесь пока нет ни одной игры'}*/}
            {/*    />*/}
            {/*</div>*/}
            <div>
                <List
                    dataSource={data}
                    renderItem={item => (
                        <List.Item
                            style={{ padding: '.5rem' }}
                            onContextMenu={e => console.log(e)}
                        >
                            <Space>
                                <Avatar
                                    shape='square'
                                    size={'small'}
                                    icon={<UserOutlined />}
                                />
                                {item}
                            </Space>
                        </List.Item>
                    )}
                />
            </div>
            <Resizer
                onMouseDown={startResizing}
                isResizing={isResizing}
            />
        </Sidebar>
    );
};
