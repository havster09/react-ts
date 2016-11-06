import * as React from 'react';
import {AuthorApi} from "../../../api/authorApi";

interface IMainProps {
  props:any;
  author:any;
};

interface IMainState {
  authors:any[];
};

export class Authors extends React.Component<IMainProps, IMainState> {
  constructor(props:any) {
    super(props);
    this.state = {
      authors: []
    };
  }

  componentWillMount() {
    this.setState({authors: AuthorApi.getAllAuthors()});
  }

  createAuthorRow(author:any) {
    return (
      <tr key={author.id}>
        <td><a href={'/#authors/' + author.id}>{author.id}</a></td>
        <td>{author.firstName} {author.lastName}</td>
      </tr>
    );
  }

  render() {
    return (
      <div>
        <h1>Authors</h1>
        <table className="table">
          <thead>
          <th>Id</th>
          <th>Name</th>
          </thead>
          <tbody>
          {this.state.authors.map(this.createAuthorRow, this)}
          </tbody>
        </table>
      </div>
    );
  }
}



