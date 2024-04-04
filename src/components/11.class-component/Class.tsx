import { Component } from 'react';

type CounterClassProps = {
  messages: string;
};

type CounterClassState = {
  count: number;
};

class CounterClass extends Component<CounterClassProps, CounterClassState> {
  state = {
    count: 0,
  };

  handleClick = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Increment</button>
        {this.props.messages} {this.state.count}
      </div>
    );
  }
}

export default CounterClass;
