import * as React from 'react';
import {Link} from "react-router";
interface IMainProps {
  key:any;
  course:any;
}

interface IMainState {

}

export class CourseListRow extends React.Component<IMainProps, IMainState> {
  static propTypes = {
    course: React.PropTypes.object.isRequired
  };

  constructor(props:any) {
    super(props);
  }

  render() {
    return (
      <tr>
        <td><a href={this.props.course.watchHref} target="_blank">Watch</a></td>
        <td><Link to={'/course/' + this.props.course.id}>{this.props.course.title}</Link></td>
        <td>{this.props.course.authorId}</td>
        <td>{this.props.course.category}</td>
        <td>{this.props.course.length}</td>
      </tr>
    );
  }
}
