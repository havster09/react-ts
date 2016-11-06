/// <reference path="../../../../typings/index.d.ts" />

import * as React from 'react';

interface IMainProps {};

interface IMainState {};

export class Header extends React.Component<IMainProps, IMainState> {
  render() {
    return (
      <nav className='navbar navbar-default'>
        <div className='container-fluid'>
          <a href='/' className='navbar-brand'>
            USC
          </a>
          <ul className='nav navbar-nav'>
            <li><a href='/'>Home</a></li>
            <li><a href='/about'>About</a></li>
          </ul>
        </div>
      </nav>
    );
  }
}
