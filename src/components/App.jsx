import React, { useState } from 'react';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';

const App = () => {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0
  })

  const countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = feedback
    if (isNaN(Math.floor((good / (good + neutral + bad)) * 100))) {
      return 0;
    } else return Math.floor((good / (good + neutral + bad)) * 100);
  };

  const countTotalFeedback = () => {
    const { good, neutral, bad } = feedback;
    return bad + good + neutral;
  };

  const onLeaveFeedback = (event) => {
    const {name} = event.target
    setFeedback({...feedback, [name]: feedback[name] + 1})
  };

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
        <FeedbackOptions onLeaveFeedback={onLeaveFeedback} />
      </Section>
      <Section title={'Statistics'}>
        <Statistics
          good={feedback.good}
          bad={feedback.bad}
          neutral={feedback.neutral}
          positivePercentage={countPositiveFeedbackPercentage}
          total={countTotalFeedback}
        />
      </Section>
    </div>
  );
};

App.propTypes = {

};

export default App;

