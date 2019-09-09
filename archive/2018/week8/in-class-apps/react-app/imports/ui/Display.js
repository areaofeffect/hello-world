import React, { Component } from 'react';
import PropTypes from 'prop-types';
 
// Display component - represents a single meteor
export default class Display extends Component {
  render() {
    return (
      <li>{this.props.asteroid.text}</li>
    );
  }
}
 
Display.propTypes = {
  // This component gets the task to display through a React prop.
  // We can use propTypes to indicate it is required
  asteroid: PropTypes.object.isRequired,
};