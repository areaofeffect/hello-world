import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data'
import { Asteroids } from '../api/asteroids.js'
import Display from './Display.js'


class AsteroidsList extends Component {

  renderAsteroids(asteroids) {
    return asteroids.map((asteroid) => (
      <Display key={asteroid._id} asteroid={asteroid} />
    ));
  }

  render() {
    const { asteroids } = this.props
    console.log(asteroids)
    return (
      <ul>
        {this.renderAsteroids(asteroids)}
      </ul>
    )
  }
}

export default withTracker(props => {
  // Do all your reactive data access in this method.
  // Note that this subscription will get cleaned up when your component is unmounted
  const handle = Meteor.subscribe('asteroids');
  return {
    asteroids: Asteroids.find({}).fetch(),
  };
})(AsteroidsList);
