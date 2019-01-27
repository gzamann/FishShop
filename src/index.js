import React from 'react';
import {render} from 'react-dom';
import './index.css';
import Router from './components/Router';
// import * as serviceWorker from './serviceWorker';

// serviceWorker.unregister();

render(<Router />, document.getElementById('root'));

if (module.hot){
    module.hot.accept();
}