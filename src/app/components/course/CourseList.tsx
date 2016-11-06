import * as React from 'react';
import {CourseListRow} from './CourseListRow';

interface IMainProps {
  courses:any[];
}

interface IMainState {

}

export class CourseList extends React.Component<IMainProps, IMainState> {
  static propTypes = {
    courses: React.PropTypes.array.isRequired
  };

    constructor(props:any) {
        super(props);
    }

    render() {
        return (
          <table className="table table-bordered">
            <thead>
            <tr>
              <th>&nbsp;</th>
              <th>Title</th>
              <th>Author</th>
              <th>Category</th>
              <th>Length</th>
            </tr>
            </thead>
            <tbody>
            {this.props.courses.map(course =>
              <CourseListRow key={course.id} course={course}/>
            )}
            </tbody>
          </table>
        );
    }
}
