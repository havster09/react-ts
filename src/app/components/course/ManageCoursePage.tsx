import * as React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {createCourse, loadCoursesSuccess, loadCourses, saveCourse} from '../../../actions/courseActions';
import {browserHistory} from "react-router";
import CourseForm from './CourseForm';
import * as toastr from 'toastr';
import {IDispatch} from "~react-redux~redux";

export interface ICourse {
  id: string;
  title: string;
  watchHref: string;
  authorId: string;
  length: string;
  category: string;
}

interface IMainProps {
  course?:any;
  actions?:any;
  authors:any;
}

interface IMainState {
  course?:any;
  errors?:any;
  saving?:any;
}

class ManageCoursePage extends React.Component<IMainProps, IMainState> {
  static propTypes = {
    actions: React.PropTypes.object,
    course: React.PropTypes.object,
    authors: React.PropTypes.array
  };

  constructor(props:any) {
    super(props);
    this.state = {
      course: Object.assign({}, this.props.course),
      errors: {},
      saving: false
    };
    this.updateCourseState = this.updateCourseState.bind(this);
    this.saveCourse = this.saveCourse.bind(this);
  }


  componentWillReceiveProps(nextProps) {
    if (this.props.course.id !== nextProps.course.id) {
      // For populating form when refreshed directly
      this.setState({
        course: Object.assign({}, nextProps.course)
      });
    }
  }

  updateCourseState(event) {
    let field = event.target.name;
    let course = this.state.course;
    course[field] = event.target.value;
    return this.setState({course: course});
  }

  saveCourse(event) {
    event.preventDefault();
    this.setState({saving: true});
    this.props.actions.saveCourse(this.state.course).then(() => {
      this.redirect();
    }).catch((error) => {
      toastr.error(error);
      this.setState({saving: false});
    });
  }

  redirect() {
    this.setState({saving: false});
    toastr.success('Course Saved');
    browserHistory.push('/courses');
  }

  render() {
    return (
      <div>
        <CourseForm
          allAuthors={this.props.authors}
          onChange={this.updateCourseState}
          onSave={this.saveCourse}
          errors={this.state.errors}
          course={this.state.course}
          saving={this.state.saving}/>
      </div>
    );
  }
}

function getCourseById(courses, id) {
  const course = courses.filter((course) => course.id === id);
  let courseItem = null;
  if(course.length) {
    courseItem = course[0];
  }
  return courseItem;
}

function mapStateToProps(state, ownProps) {

  const courseId = ownProps.params.id; // from the pah /course/:id

  let course = {
    id: '',
    watchHref: '',
    title: '',
    authorId: '',
    length: '',
    category: ''
  };

  if(courseId && state.courses.length > 0) {
    course = getCourseById(state.courses, courseId);
  }

  let authorsFormattedForDropdown = [];

  if(state.authors) {
    authorsFormattedForDropdown = state.authors.map((author) => {
      return {
        value:author.id,
        text:author.firstName + ' ' + author.lastName
      };
    });
  }
  else {
    authorsFormattedForDropdown.push({value:99,text:'haven ramos'});
  }

  return {
    course: course,
    authors: authorsFormattedForDropdown
  };
}

function mapDispatchToProps(dispatch:IDispatch) {
  return {
    actions: bindActionCreators({
      createCourse,
      loadCoursesSuccess,
      loadCourses,
      saveCourse
    }, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);
