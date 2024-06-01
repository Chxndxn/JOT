/* eslint-disable react-refresh/only-export-components */
import { lazy } from 'react';
import { pages } from './paths';
import NotFound from '../views/error';
// const HomePage = lazy(() => import("../views/home"));
// const AboutPage = lazy(() => import("../views/about"));
const Authpage = lazy(() => import('../components/Auth'));
const WorkInProgress = lazy(
	() => import('../components/common/WorkInProgress')
);

const rootRoutes = [
	{
		path: pages.root,
		element: '',
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
			{ path: pages.auth.relativePath, element: <Authpage /> },
			{ path: pages.error.relativePath, element: <NotFound /> },
			{
				path: '*',
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
