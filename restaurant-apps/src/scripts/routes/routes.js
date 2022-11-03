import Detail from '../views/pages/detail';
import home from '../views/pages/home';

const routes = {
    '/': home,
    '/home': home,
    '/detail/:id': Detail,
};

export default routes;