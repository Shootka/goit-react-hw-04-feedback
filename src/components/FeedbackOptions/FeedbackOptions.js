import React  from 'react';
import PropTypes from 'prop-types';
import { _BUTTONS_NAME } from '../../static/static';

const FeedbackOptions = ({ onLeaveFeedback }) => {
  return (
    <div style={{ display: 'flex', gap: '10px', marginTop: '30px' }}>
      {_BUTTONS_NAME.map(({ name, feed }, index) => {
        return <button key={index} name={feed} onClick={(event) => onLeaveFeedback(event)}>{name}</button>;
      })}
    </div>
  );

};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func,
};

export default FeedbackOptions;
