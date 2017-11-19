// import validator from 'validator';
import react from 'react';
import reactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import 'normalize.css/normalize.css';
import './styles/styles.scss';


ReactDOM.render((
  <AppRouter />
), document.getElementById('app'));
