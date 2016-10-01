import App from './app.js';
import Home from './Home';

export default  {
    path: '/',
    component: App,
    childRoutes: [
        {
            path: 'user',
            getComponent(location, cb) {
                require.ensure([], (require) => {
                    cb(null,
                        require('./User.js').default
                    )
                })
            }
        },
        {
            path: 'about',
            getComponent(location, cb) {
                require.ensure([], (require) => {
                    cb(null,
                        require('./About.js').default
                    )
                })
            }
        }
    ],
    indexRoute: {
        component: Home
    }
}
