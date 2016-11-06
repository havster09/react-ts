import * as React from 'react';

interface IMainProps {
  name: string;
  label: string;
  onChange: (event: any) => void;
  placeholder?: string;
  value?: string;
  error?: string;
  defaultOption: string;
  options: any[];
}

interface IMainState {

}

export class SelectInput extends React.Component<IMainProps, IMainState> {
  static propTypes = {
    name: React.PropTypes.string.isRequired,
    label: React.PropTypes.string.isRequired,
    onChange: React.PropTypes.func.isRequired,
    value: React.PropTypes.string,
    error: React.PropTypes.string,
    defaultOption: React.PropTypes.string,
    options: React.PropTypes.arrayOf(React.PropTypes.object)
  };

  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <div className="form-group">
        <label htmlFor={this.props.name}>{this.props.label}</label>
        <div className="field">
          {/* Note, value is set here rather than on the option - docs: https://facebook.github.io/react/docs/forms.html */}
          <select
            name={this.props.name}
            value={this.props.value}
            onChange={this.props.onChange}
            className="form-control">
            <option value="">{this.props.defaultOption}</option>
            {this.props.options.map((option) => {
              return <option key={option.value} value={option.value}>{option.text}</option>;
            })
            }
          </select>
          {this.props.error && <div className="alert alert-danger">{this.props.error}</div>}
        </div>
      </div>
    );
  }
}



