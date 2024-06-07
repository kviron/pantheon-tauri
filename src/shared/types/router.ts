import { RouteProps } from '@solidjs/router';
import { UserRole } from '@/entities/User';

export type AppRoutesProps<T extends string = string> = RouteProps<T> & {
    name?: string;
    authOnly?: boolean;
    roles?: UserRole[];
};
