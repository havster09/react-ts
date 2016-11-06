/// <reference path="../typings/index.d.ts" />
import 'es6-promise';
import * as React from 'react';
import {Router, browserHistory} from 'react-router';
import routes from './routes';
import '../node_modules/toastr/build/toastr.min.css';
import './index.scss';
// import 'jquery';
// import 'bootstrap/dist/js/bootsrap';
// import 'bootstrap/dist/css/bootstrap.min.css';

Router.run(routes, function (Handler: new() => React.Component<any, any>) {
  React.render(<Handler/>, document.getElementById('app'));
});
