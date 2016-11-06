/// <reference path="../typings/index.d.ts" />
import 'es6-promise';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Router, browserHistory} from 'react-router';
import routes from './routes';
import '../node_modules/toastr/build/toastr.min.css';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import {loadCourses} from './actions/courseActions';
import {loadAuthors} from "./actions/authorActions";

const store = configureStore(); // override initial state in reducers

store.dispatch(loadCourses());
store.dispatch(loadAuthors());

ReactDOM.render(
  <Provider store={store}>
  <Router history={browserHistory} routes={routes}/>
  </Provider>
  ,document.getElementById('root')
);
