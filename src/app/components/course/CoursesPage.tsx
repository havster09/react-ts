import * as React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {browserHistory} from "react-router";
import * as courseActions from '../../../actions/courseActions.tsx';
import {CourseList} from './CourseList';


interface IMainProps {
  dispatch:any;
  courses:any;
}

interface IMainState {
  course:any;
}

class CoursesPage extends React.Component<IMainProps, IMainState> {
  static propTypes = {
    dispatch: React.PropTypes.func.isRequired,
    courses: React.PropTypes.array.isRequired
  };

  constructor(props:any, context:any) {
    super(props, context);
    this.redirectToAddCoursePage = this.redirectToAddCoursePage.bind(this);
  }

  componentDidMount() {

  }

  courseRow(course, index) {
    return <div key={index}>{course.title}</div>;
  }

  redirectToAddCoursePage() {
    browserHistory.push('/course');
  }

  render() {

    return (
      <div>
        <h1>Courses</h1>
        <input type="submit"
               value="Add Course"
               className="btn btn-default"
               onClick={this.redirectToAddCoursePage}/>
        <CourseList courses={this.props.courses}/>
      </div>
    );
  }

}

function mapStateToProps(state, ownProps) {

  return {
    courses: state.courses
  }
}

export default connect(mapStateToProps)(CoursesPage);
