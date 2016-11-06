import * as React from 'react';

interface IMainProps {};

interface IMainState {};

export class NotFoundPage extends React.Component<IMainProps, IMainState> {
  render() {
    return (
      <div>
        <h1>Page not found</h1>
      </div>
    );
  }
}
