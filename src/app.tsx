import * as React from 'react';

interface IMainProps {};

interface IMainState {};

const mainHeader = 'Recording Preferences';

export class Home extends React.Component<IMainProps, IMainState> {
  render() {
    return (
      <div>
        <div className='jumbotron'>
          <h1>{mainHeader}</h1>
        </div>
      </div>
    );
  }
}
