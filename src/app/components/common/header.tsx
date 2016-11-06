import * as React from 'react';
import {Link} from "react-router";
import LoadingDots from "./LoadingDots";

interface IMainProps {
  loading:boolean;
}

interface IMainState {

}

export class Header extends React.Component<IMainProps, IMainState> {
  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            USC
          </Link>
          <ul className="nav navbar-nav">
            <li><Link to="/" activeClassName="active">Home</Link></li>
            <li><Link to="/about" activeClassName="active">About</Link></li>
            <li><Link to="/authors" activeClassName="active">Authors</Link></li>
            <li><Link to="/courses" activeClassName="active">Courses</Link></li>
            {this.props.loading && <LoadingDots interval={100} dots={20}/>}
          </ul>
        </div>
      </nav>
    );
  }
}
