//Layout

import Home from '../pages/Home';
import Work from '../pages/Work';
import About from '../pages/About';
import Contact from '../pages/Contact';

//Public Routes
const publicRoutes = [
	{ path: '/', component: Home },
	{ path: '/about', component: About },
	{ path: '/contact', component: Contact },
	{ path: '/work', component: Work },
];

// Private Routes
const privateRoutes = [];

export { publicRoutes, privateRoutes };
