import React from 'react';
import PropTypes from 'prop-types';

const Section = ({title, children}) => {
    return (
      <div>
        <h4 style={{marginBottom: 0}}>{title}</h4>
        {children}
      </div>
    );

}

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node
};

export default Section;
