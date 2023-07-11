import Home from '../pages/Home/index.';
import Profile from '../pages/Profile/index.';
import Search from '../pages/Search/index.';
import FromLogin from '../pages/FromLogin/index';
import FromRegister from '../pages/FromRegister';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/type/:type', component: Home },
    { path: '/search/:key', component: Search },
    { path: '/:slug', component: Profile },
    { path: '/:slug/:id', component: Profile },
    { path: '/account/:login', component: FromLogin },
    { path: '/register/:register', component: FromRegister },
];

export { publicRoutes };
