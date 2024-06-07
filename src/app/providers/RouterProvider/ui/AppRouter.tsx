import { routeConfig } from '../config/routeConfig';
import { Route, Router } from '@solidjs/router';
import type { Component } from 'solid-js';
//@ts-ignore
import { RouterProps } from '@solidjs/router/dist/routers/Router';

type AppRouterProps = {
    root: typeof RouterProps.root;
};

const AppRouter: Component<AppRouterProps> = props => {
    return (
        <Router root={props.root}>
            {Object.values(routeConfig).map(route => (
                <Route
                    path={route.path}
                    component={route.component}
                />
            ))}
        </Router>
    );
};

export default AppRouter;
