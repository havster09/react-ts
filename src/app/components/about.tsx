import * as React from 'react';

interface IMainProps {};

interface IMainState {};

export class About extends React.Component<IMainProps, IMainState> {
  componentWillMount() {
    // if(!confirm("Are you sure ?")) {
    //   // todo history.back
    //   history.back();
    // }
  }

  render() {
    return (
      <div>
        <h1>About Page</h1>
      </div>
    );
  }
}
