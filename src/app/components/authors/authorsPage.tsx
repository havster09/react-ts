import * as React from 'react';
import AuthorApi from "../../../api/authorApi";
import {AuthorsList} from "./authorsList";
import {Link} from "react-router";

interface IMainProps {

};

interface IMainState {
  authors: any[];
};

export class AuthorsPage extends React.Component<IMainProps, IMainState> {
  constructor(props: any) {
    super(props);
    this.state = {
      authors: []
    };
  }

  componentDidMount() {
    this.setState({authors: AuthorApi.returnAllAuthors()});
  }

  render() {
    return (
      <div>
        <Link to="addAuthor" className="btn btn-default">Add Author</Link>
        <AuthorsList authors={this.state.authors}/>
      </div>
    );
  }
}



