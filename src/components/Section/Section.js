import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Section extends Component {
  render() {
    return (
      <div>
        <h4 style={{marginBottom: 0}}>{this.props.title}</h4>
        {this.props.children}
      </div>
    );
  }
}

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node
};

export default Section;
