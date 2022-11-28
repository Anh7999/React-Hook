import React, { useState, useEffect } from "react";
class CountDown extends React.Component {
  state = {
    count: 10,
  };
  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({
        count: this.state.count - 1,
      });
    }, 1000);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState !== this.state.count && this.state.count === 0) {
      if (this.timer) {
        clearInterval(this.timer);
        // this.props.onTimeup();
      }
    }
  }

  render() {
    return <div>{this.state.count} class</div>;
  }
}

// export default CountDown;

const NewCountDown = ({onTimeup}) => {
  const [count, setCount] = useState(10);
  useEffect(() => {
    if (count === 0) {
      onTimeup();
      return;
    }

    let timer = setInterval(() => {
      setCount(count - 1);
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, [count]);

  return <div>{count} Hook</div>;
};

export { CountDown, NewCountDown };
