import React, { Fragment } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  withRouter
} from "react-router-dom";
import { routes } from "./config/routes";

const DynamicRoute = ({ route, ...props }) => {
  return (
    <route.layout {...props}>
      {route.subRoutes.map((subRoute, i) => (
        <Route
          key={i}
          exact={subRoute.exact}
          path={subRoute.path}
          component={subRoute.component}
        />
      ))}
    </route.layout>
  );
};

function App() {
  return (
    <Fragment>
      <Switch>
        {routes.map((route, i) => {
          return (
            route.subRoutes &&
            route.subRoutes.length > 0 && (
              <Route
                key={i}
                exact={route.subRoutes.some((r) => r.exact)}
                path={route.subRoutes.map((r) => r.path)}
                render={(props) => (
                  <Fragment>
                    <DynamicRoute {...props} {...{ route }} />
                  </Fragment>
                )}
              />
            )
          );
        })}
      </Switch>
    </Fragment>
  );
}

const AppWithRouter = withRouter(App);

const RouterWrapper = () => (
  <Router>
    <AppWithRouter />
  </Router>
);

export default RouterWrapper;
