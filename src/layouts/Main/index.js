import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { routes } from "config/routes";
const Main = ({ children, ...props }) => {
  return (
    <Fragment>
      <h1>Main Layout</h1>
      {routes.map((item) =>
        item.subRoutes.map((el) => <Link to={el.path}> {el.name} </Link>)
      )}
      {children}
    </Fragment>
  );
};

export default Main;
