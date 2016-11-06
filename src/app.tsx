import * as React from 'react';
import {Header} from "./app/components/common/header";
import {connect} from 'react-redux';

interface IMainProps {
  children:any;
  loading:boolean;
}

interface IMainState {

}

class App extends React.Component<IMainProps, IMainState> {
  static propTypes = {
    children: React.PropTypes.object.isRequired,
    loading:React.PropTypes.bool.isRequired
  };
  render() {
    return (
      <div>
        <Header loading={this.props.loading}/>
        <div className="container">
          {this.props.children}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    loading:state.ajaxCallsInProgress > 0
  }
}

export default connect(mapStateToProps)(App);
