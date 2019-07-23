
import ReactDOM  from 'react-dom';

import configureStore from './redux/store.js';
import { Provider  } from 'react-redux';
let store = configureStore();

import App from './app.js'


ReactDOM.render((
  <Provider store={store}>
      <App />
  </Provider>
), document.getElementById('app'))