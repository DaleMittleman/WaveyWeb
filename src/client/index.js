import React from 'react';
import App from './components/App.jsx'
import { render } from 'react-dom';
import resolve from './ajax/resolve.js';
import Store from './stores/store.js';

(async function init() {
  render(
    <App />,
    document.getElementById('root')
  );
})();
