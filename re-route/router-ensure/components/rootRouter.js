import App from './app.js';
import Home from './Home';

export default {
    path: '/',
    component: App,
    getChildRoutes(location, cb) {
        require.ensure([], (require) => {
            cb(null, [
                require('./routeAbout.js').default,
                require('./routeUser.js').default
            ])
        })
    },
    indexRoute: {
        component: Home
    }
}
