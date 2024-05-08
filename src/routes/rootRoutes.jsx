/* eslint-disable react-refresh/only-export-components */
import { lazy } from "react";
import { pages } from "./paths";
// const HomePage = lazy(() => import("../views/home"));
// const AboutPage = lazy(() => import("../views/about"));
const LoginPage = lazy(() => import("../components/Login"));
const SignupPage = lazy(() => import("../components/Signup"));
const WorkInProgress = lazy(() =>
  import("../components/common/WorkInProgress")
);

const rootRoutes = [
  {
    path: pages.root,
    element: "",
    children: [
      {
        index: true,
        element: <WorkInProgress pageName="Home" />,
      },
      {
        path: pages.about.relativePath,
        element: <WorkInProgress />,
      },
      { path: pages.contact.relativePath, element: <WorkInProgress /> },
      { path: pages.login.relativePath, element: <LoginPage /> },
      { path: pages.signUp.relativePath, element: <SignupPage /> },
      {
        path: "*",
        element: (
          <>
            <p>Not found</p>
          </>
        ),
      },
    ],
  },
];

export { rootRoutes };
