const React = require('react');
const actions = require('../actions');
const counterStore = require('../stores/counterStore')

class App extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      counter: counterStore.getState()
    };

    this.handleIncrementClick = this.handleIncrementClick.bind(this);
    this.handleDecrementClick = this.handleDecrementClick.bind(this);


  }

  handleIncrementClick(ev) {
    ev.preventDefault();
    actions.increment();
  }

  handleDecrementClick(ev) {
    ev.preventDefault();
    actions.decrement();
  }

  componentDidMount () {
    this.removeListener = counterStore.addListener(counter => {
      this.setState({ counter });
    });
  }
  componentWillUnmount () {
    this.removeListener();
  }
  render () {
    return (
      <div className='app'>
        <h1 className='counter'>{this.state.counter}</h1>
        <div className='actions'>
          <button onClick={this.handleDecrementClick} className='decrement'>
            -
          </button>
          <button onClick={this.handleIncrementClick} className='increment'>
            +
          </button>
        </div>
      </div>
    );
  }
}

module.exports = App;
