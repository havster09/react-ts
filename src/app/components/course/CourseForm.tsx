import * as React from 'react';
import {TextInput} from '../common/textInput';
import {SelectInput} from '../common/selectInput';

interface IMainProps {
  course: any;
  allAuthors: any[];
  onSave: (event:any) => void;
  onChange: (event:any) => void;
  saving: any;
  errors: any;
}

interface IMainState {

}

export default class CourseForm extends React.Component<IMainProps, IMainState> {
  static propTypes = {
    course: React.PropTypes.object.isRequired,
    allAuthors: React.PropTypes.array,
    onSave: React.PropTypes.func.isRequired,
    onChange: React.PropTypes.func.isRequired,
    saving: React.PropTypes.bool,
    errors: React.PropTypes.object
  };
  constructor(props:any) {
    super(props);
  }

  render() {
    return (
      <form>
        <h1>Manage Course Recordings</h1>
        <TextInput
          name="title"
          label="Title"
          value={this.props.course.title}
          onChange={this.props.onChange}
          error={this.props.errors.title}/>

        <SelectInput
          name="authorId"
          label="Author"
          value={this.props.course.authorId}
          defaultOption="Select Author"
          options={this.props.allAuthors}
          onChange={this.props.onChange}
          error={this.props.errors.authorId}/>

        <TextInput
          name="category"
          label="Category"
          value={this.props.course.category}
          onChange={this.props.onChange}
          error={this.props.errors.category}/>

        <TextInput
          name="length"
          label="Length"
          value={this.props.course.length}
          onChange={this.props.onChange}
          error={this.props.errors.length}/>

        <input
          type="submit"
          disabled={this.props.saving}
          value={this.props.saving ? 'Saving...' : 'Save'}
          className="btn btn-primary"
          onClick={this.props.onSave}/>
      </form>
    );
  }
}
