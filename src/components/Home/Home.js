import React, { Component } from 'react';
import Booking from './Booking/Booking';
class Home extends Component {
  render() {
    console.log(this.props);
    return (
      <>
        <Booking {...this.props} />
      </>
    );
  }
}

export default Home;
