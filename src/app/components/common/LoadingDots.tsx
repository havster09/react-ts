import * as React from 'react';
interface IMainProps {
  interval:number;
  dots:number;
}

interface IMainState {
  frame:any;
}

class LoadingDots extends React.Component<IMainProps, IMainState> {
  private interval;
  static propTypes = {
    interval: React.PropTypes.number,
    dots: React.PropTypes.number
  };
  constructor(props, context) {
    super(props, context);

    this.state = {frame: 1};
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({  // eslint-disable-line react/no-did-mount-set-state
        frame: this.state.frame + 1
      });
    }, this.props.interval);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    let dots = this.state.frame % (this.props.dots + 1);
    let text = '';
    while (dots > 0) {
      text += '.';
      dots--;
    }
    return <span {...this.props}>{text}&nbsp;</span>;
  }
}

export default LoadingDots;
