import * as React from 'react';
import {Link} from "react-router";

interface IMainProps {
  authors: any[];
};

interface IMainState {

};

export class AuthorsList extends React.Component<IMainProps, IMainState> {
  constructor(props: any) {
    super(props);
  }

  createAuthorRow(author: any) {
    return (
      <tr key={author.id}>
        <td><Link to={`/manageAuthor/${author.id}`}>{author.id}</Link></td>
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
          <tr>
          <th>Id</th>
          <th>Name</th>
          </tr>
          </thead>
          <tbody>
          {this.props.authors.map(this.createAuthorRow, this)}
          </tbody>
        </table>
      </div>
    );
  }
}



