import styled from '@emotion/styled';
import Sider from 'antd/es/layout/Sider';
import { css } from '@emotion/react';
import { HTMLAttributes } from 'react';

export const Sidebar = styled(Sider)({
    transition: 'none',
    height: 'calc(100vh - var(--ant-layout-header-height))',
});

type ResizerProps = HTMLAttributes<HTMLDivElement> & {
    isResizing: boolean;
};

export const Resizer = styled(({ isResizing, ...props }: ResizerProps) => <div {...props} />)(
    ({ isResizing, theme }) => css`
        width: 5px;
        cursor: col-resize;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        z-index: 100;

        &:hover {
            background-color: color-mix(
                in srgb,
                ${theme.components?.Layout?.siderBg},
                #000 ${isResizing ? '20%' : '10%'}
            );
        }
    `,
);
