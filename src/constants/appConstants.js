import { pages } from '../routes/paths';

export const headerNavElements = [
	{ pageName: 'Home', path: pages.root },
	{ pageName: 'About', path: pages.about.absolutePath },
	{ pageName: 'Contact', path: pages.contact.absolutePath },
	{ pageName: 'Login', path: pages.auth.absolutePath },
];
export const footerNavElements = ['About', 'Contact'];
