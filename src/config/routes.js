/** Layouts */
import Main from "layouts/Main";

/** Pages */
import Home from "views/Home";
import Graph from "views/Graph";

export const routes = [
  {
    layout: Main,
    subRoutes: [
      {
        exact: true,
        path: "/",
        component: Home,
        name: "Home"
      },
      {
        exact: true,
        path: "/graph",
        component: Graph,
        name: "graph"
      }
    ]
  }
];
