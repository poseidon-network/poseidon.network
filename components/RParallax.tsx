import React from 'react';
// @ts-ignore
import Parallax from 'react-rellax';

const Div = (props: any) => <div>{props.children}</div>;

class RParallax extends React.Component<any> {
  state = {
    Comp: Parallax,
  };

  componentDidMount() {
    if (window.screen.width < 768) {
      this.setState({
        Comp: Div,
      });
    }
  }

  render() {
    const { Comp } = this.state;
    const { children, ...props } = this.props;

    return <Comp {...props}>{children}</Comp>;
  }
}

export default RParallax;
