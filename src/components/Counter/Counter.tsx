import React from 'react';

interface Props {
  initialValue?: number;
}

interface State {
  counter: number;
}

class CounterComponent extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      counter: this.props.initialValue || 0,
    };
  }
  counterIncrement = () => {
    this.setState((prevState) => ({
      counter: prevState.counter + 1,
    }));
  };
  counterDecrement = () => {
    this.setState((prevState) => ({
      counter: prevState.counter - 1,
    }));
  };
  render() {
    return React.createElement(
      'div',
      { className: 'counter' },
      React.createElement('div', null, this.state.counter),
      React.createElement(
        'div',
        null,
        React.createElement('button', { onClick: this.counterDecrement }, '-'),
        React.createElement('button', { onClick: this.counterIncrement }, '+'),
      ),
    );
  }
}

export default CounterComponent;
