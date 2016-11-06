import * as React from 'react';

interface IMainProps {
  name: string;
  label: string;
  onChange: (event: any) => void;
  placeholder?: string;
  value?: string;
  error?: string;
}

interface IMainState {

}

export class TextInput extends React.Component<IMainProps, IMainState> {
  static propTypes = {
    name:  React.PropTypes.string.isRequired,
    label:  React.PropTypes.string.isRequired,
    onChange:  React.PropTypes.func.isRequired
  };

  constructor(props: any) {
    super(props);
  }

  render() {
    let wrapperClass = "form-group";
    if (this.props.error && this.props.error.length > 0) {
      wrapperClass += " " + "has-error";
    }
    return (
      <div className={wrapperClass}>
        <label htmlFor={this.props.name}>{this.props.label}</label>
        <div className="field">
          <input type="text"
                 name={this.props.name}
                 className="form-control"
                 placeholder={this.props.placeholder}
                 ref={this.props.name}
                 value={this.props.value}
                 onChange={this.props.onChange}/>
          <div className="input">{this.props.error}</div>
        </div>
      </div>
    );
  }
}



