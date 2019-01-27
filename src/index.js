import React from 'react';
import {render} from 'react-dom';
import './index.css';
// import App from './App';
import StorePicker from './components/StorePicker';
import * as serviceWorker from './serviceWorker';

serviceWorker.unregister();

render(<StorePicker />, document.getElementById('root'));

if (module.hot){
    module.hot.accept();
}