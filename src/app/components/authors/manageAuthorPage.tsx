import * as React from 'react';
import {AuthorForm} from './authorForm';
import AuthorApi from "../../../api/authorApi";
import {browserHistory} from "react-router";
import * as toastr from 'toastr';

export interface IAuthor {
  id: string;
  firstName: string;
  lastName: string;
}

interface IMainProps {
  params?:any;
};

interface IMainState {
  author?: IAuthor;
  errors?: any;
};

export class ManageAuthorPage extends React.Component<IMainProps, IMainState> {
  constructor(props: any) {
    super(props);
    this.state = {
      author: {
        id: '',
        firstName: '',
        lastName: ''
      },
      errors: {}
    };

    this.setAuthorState = this.setAuthorState.bind(this);
    this.saveAuthor = this.saveAuthor.bind(this);
  }

  componentDidMount() {
    console.log('mount component');
  }

  componentWillMount() {
    const authorId = this.props.params.id;
    if(authorId) {
      this.setState({author: AuthorApi.getAuthorById(authorId)});
    }
  }

  saveAuthor(event: any) {
    event.preventDefault();
    if(!this.authorFormIsValid()) {
      return;
    }
    AuthorApi.saveAuthor(this.state.author);
    browserHistory.push('/authors');
    toastr.success('Save notification');
    console.log('Save notification');
  }

  setAuthorState(event: any) {
    const field = event.target.name;
    const value = event.target.value;
    this.state.author[field] = value;
    return this.setState({author: this.state.author});
  }

  render() {
    return (
      <div>
        <AuthorForm author={this.state.author} onChange={this.setAuthorState} onSave={this.saveAuthor} errors={this.state.errors}/>
      </div>
    );
  }

  authorFormIsValid() {
    var formIsValid = true;
    this.state.errors = {};
    if(!this.state.author.firstName) {
      this.state.errors.firstName = "First Name is required";
      formIsValid = false;
    }

    if(!this.state.author.lastName) {
      this.state.errors.lastName = "Last Name is required";
      formIsValid = false;
    }

    this.setState({errors:this.state.errors});
    return formIsValid;
  }
}



