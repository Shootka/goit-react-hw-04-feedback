import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Notification from '../Notification/Notification';

class Statistics extends Component {
  render() {

    const { good, neutral, bad, total, positivePercentage } = this.props;
    if (good || bad || neutral) {
      return (
        <div>
          <p style={{ margin: '5px 0' }}>Good: {good}</p>
          <p style={{ margin: '5px 0' }}>Neutral: {neutral}</p>
          <p style={{ margin: '5px 0' }}>Bad: {bad}</p>
          <p style={{ margin: '5px 0' }}>Total: {total()}</p>
          <p style={{ margin: '5px 0' }}>Positive feedback: {positivePercentage()}%</p>
        </div>
      );
    } else return <Notification/>
  }
}

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.func,
  positivePercentage: PropTypes.func,
};

export default Statistics;
