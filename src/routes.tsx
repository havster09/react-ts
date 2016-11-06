import * as React from 'react';
import {Route, IndexRoute, Redirect} from 'react-router';

import {Home} from './app/components/home';
import {About} from './app/components/about';
import {AuthorsPage} from './app/components/authors/authorsPage';
import {NotFoundPage} from "./app/components/notFoundPage";
import {ManageAuthorPage} from "./app/components/authors/manageAuthorPage";
import CoursesPage from "./app/components/course/CoursesPage";
import App from "./app";
import ManageCoursePage from "./app/components/course/ManageCoursePage";


export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home}/>
    <Route path="/about" component={About}/>
    <Route path="/authors" component={AuthorsPage}/>
    <Route path="/addAuthor" component={ManageAuthorPage}/>
    <Route path="/manageAuthor/:id" component={ManageAuthorPage}/>

    <Route path="/courses" component={CoursesPage}/>

    <Route path="/course" component={ManageCoursePage}/>
    <Route path="/course/:id" component={ManageCoursePage}/>

    <Route path="/notfound" component={NotFoundPage}/>

    <Redirect from="about-us" to="/about"/>
    <Redirect from="/*" to="/notfound"/>
  </Route>
);
