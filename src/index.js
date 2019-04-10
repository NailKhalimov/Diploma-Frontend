import React from 'react';
import ReactDOM from 'react-dom';
import './styles/style.css';
import {BrowserRouter} from 'react-router-dom';

import Auth from './components/auth/index';
import Routes from './routes';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

ReactDOM.render(
  <App/>
  ,
  document.getElementById('root')
);