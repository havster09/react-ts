import * as React from 'react';
import {TextInput} from "../common/textInput";
import {IAuthor} from "./manageAuthorPage";


interface IMainProps {
  author: IAuthor;
  onChange: (event: any) => void;
  onSave: (event: any) => void;
  errors:any;
}

interface IMainState {

}

export class AuthorForm extends React.Component<IMainProps, IMainState> {
  static propTypes = {
    author: React.PropTypes.object.isRequired,
    onChange: React.PropTypes.func.isRequired,
    onSave: React.PropTypes.func.isRequired,
    errors: React.PropTypes.object
  };

  constructor(props:  any) {
    super(props);
  }

  componentDidMount() {
    console.log('mount component');
  }

  render() {
    return (
      <div>
        <form>
          <h1>Manage Author</h1>
          <TextInput
            name="firstName"
            label="First Name"
            value={this.props.author.firstName}
            onChange={this.props.onChange}
            error={this.props.errors.firstName}/>

          <TextInput
            name="lastName"
            label="Last Name"
            value={this.props.author.lastName}
            onChange={this.props.onChange}
            error={this.props.errors.lastName}/>

          <input type="submit" value="Save" className="btn btn-default" onClick={this.props.onSave}/>
        </form>
      </div>
    );
  }
}



