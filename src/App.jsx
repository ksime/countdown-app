import React, { Component } from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';
import Clock from './Clock';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deadline: 'December 25, 2017',
      newDeadline: '',
    };

    this.changeDeadline = this.changeDeadline.bind(this);
    this.handleDeadlineChange = this.handleDeadlineChange.bind(this);
  }

  changeDeadline() {
    this.setState({
      deadline: this.state.newDeadline,
    });
  }

  handleDeadlineChange(e) {
    this.setState({
      newDeadline: e.target.value,
    });
  }

  render() {
    return (
      <div className="App">
        <div className="App-title">Countdown to {this.state.deadline}</div>
        <Clock deadline={this.state.deadline} />
        <Form inline>
          <FormControl
            placeholder="new date"
            onChange={this.handleDeadlineChange}
            className="Deadline-input"
          />
          <Button onClick={this.changeDeadline}>Submit</Button>
        </Form>
      </div>
    );
  }
}

export default App;
