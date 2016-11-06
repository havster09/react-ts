import * as React from 'react';
import {AuthorApi} from "../../../api/authorApi";
import {AuthorsList} from "./authorsList";

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
    this.setState({authors: AuthorApi.getAllAuthors()});
  }

  render() {
    return (
      <AuthorsList authors={this.state.authors}/>
    );
  }
}



