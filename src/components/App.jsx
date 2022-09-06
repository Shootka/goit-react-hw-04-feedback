import React, { Component } from 'react';

const _BUTTONS_NAME = [{
  name: 'Good',
  feed: 'good',
}, {
  name: 'Neutral', feed: 'neutral',
}, {
  name: 'Bad', feed: 'bad',
}];

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  countPositiveFeedbackPercentage = () => {
    const {good, neutral, bad} = this.state
    console.log(neutral + bad);
    if (isNaN(Math.floor((good / (good + neutral + bad)) * 100))){
      return 0
    }else return Math.floor((good / (good + neutral + bad)) * 100)

  };

  countTotalFeedback = () => {
    const {good, neutral, bad} = this.state
    return bad + good + neutral
  };

  sendFeedback = (type) => {
    if (type === 'good') {
      this.setState({
        good: this.state.good + 1,
      });
    } else if (type === 'neutral') {
      this.setState({
        neutral: this.state.neutral + 1,
      });
    } else {
      this.setState({
        bad: this.state.bad + 1,
      });
    }
  };

  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >Please leave feedback
        <div style={{ display: 'flex', gap: '10px', marginTop: '30px' }}>
          {_BUTTONS_NAME.map(({ name, feed }, index) => {
            return <button key={index} onClick={() => this.sendFeedback(feed)}>{name}</button>;
          })}
        </div>
        <div>
          <p>Good: {this.state.good}</p>
          <p>Neutral: {this.state.neutral}</p>
          <p>Bad: {this.state.bad}</p>
          <p>Total: {this.countTotalFeedback()}</p>
          <p>Positive feedback: {this.countPositiveFeedbackPercentage()}%</p>
        </div>
      </div>
    );
  }
}

export default App;
