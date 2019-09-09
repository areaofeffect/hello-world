import React, { Component } from 'react';
import PropTypes from 'prop-types';
import P5Wrapper from 'react-p5-wrapper';
import sketch from './p5/sketch.js';
import { withTracker } from 'meteor/react-meteor-data';
import { Ascii } from '../api/ascii.js';


class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      ascii: {},
    };
 
  }

  render() {
    return (
      <div className="container">
        <header>
          <h1>super-serial-app</h1>
        </header>
        {/*pass the p5 sktech file into the React wrapper
        also pass the ascii prop which will updated based on withTracker below*/}
        <P5Wrapper sketch={sketch} ascii={this.props.ascii} />
      </div>
    );
  }
}

App.defaultProps = {
  ascii: {text:"."},
};

App.propTypes = {
  ascii: PropTypes.object.isRequired,
};

export default withTracker(props => {
  Meteor.subscribe('ascii');
  return {
    ascii: Ascii.find({}, { sort: { updatedAt: -1 } }).fetch()[0],
  };
})(App);