import React, { Component } from 'react';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';


class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state;
    if (isNaN(Math.floor((good / (good + neutral + bad)) * 100))) {
      return 0;
    } else return Math.floor((good / (good + neutral + bad)) * 100);
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return bad + good + neutral;
  };

  onLeaveFeedback = (event) => {
    const {name} = event.target
      this.setState({
        [name]: this.state[name] + 1,
      });
  };

  render() {
    const { good, neutral, bad } = this.state;
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
      >
        <Section title={'Please leave feedback'}>
          <FeedbackOptions onLeaveFeedback={this.onLeaveFeedback} />
        </Section>
        <Section title={'Statistics'}>
          <Statistics
            good={good}
            bad={bad}
            neutral={neutral}
            positivePercentage={this.countPositiveFeedbackPercentage}
            total={this.countTotalFeedback}
          />
        </Section>
      </div>
    );
  }
}

export default App;
