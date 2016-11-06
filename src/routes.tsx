/// <reference path="../typings/index.d.ts" />

import 'es6-promise';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';
import '../node_modules/toastr/build/toastr.min.css';

import {Home} from './app/components/home';
import {About} from './app/components/about';
import {AuthorsPage} from './app/components/authors/authorsPage';

import './index.scss';
import {Header} from "./app/components/common/header";



ReactDOM.render(
  <div>
    <Header/>
    <Router history={browserHistory}>
      <Route path='/' component={Home}/>
      <Route path='/about' component={About}/>
      <Route path='/authors' component={AuthorsPage}/>
    </Router>
  </div>,
  document.getElementById('root')
);
