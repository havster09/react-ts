/// <reference path="../../../typings/index.d.ts" />

import * as React from 'react';

interface IMainProps {};

interface IMainState {};

const mainHeader:string = 'Recording Preferences';

export class Home extends React.Component<IMainProps, IMainState> {
  render() {
    return (
      <div className='jumbotron'>
       <h1>{mainHeader}</h1>
      </div>
    );
  }
}
