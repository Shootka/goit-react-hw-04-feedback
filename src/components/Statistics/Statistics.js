import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Statistics extends Component {
  render() {
    return (
      <div>
        <p style={{margin: '5px 0'}}>Good: {this.props.good}</p>
        <p style={{margin: '5px 0'}}>Neutral: {this.props.neutral}</p>
        <p style={{margin: '5px 0'}}>Bad: {this.props.bad}</p>
        <p style={{margin: '5px 0'}}>Total: {this.props.total()}</p>
        <p style={{margin: '5px 0'}}>Positive feedback: {this.props.positivePercentage()}%</p>
      </div>
    );
  }
}

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.func,
  positivePercentage: PropTypes.func
};

export default Statistics;
