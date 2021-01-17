import React, { Component } from 'react';
import './Booked.css';
class Booked extends Component {
  render() {
    console.log(
      this.props.match.params.distance,
      this.props.match.params.status
    );
    let note;
    if (this.props.match.params.status == 'true') {
      note = (
        <div className='Booked'>
          <h2>Confirmed your booking</h2>
          <p> Ur Booking COST {this.props.match.params.distance * 10}</p>
        </div>
      );
    } else {
      note = (
        <div className='Booked'>
          <h2>Vehicles Not available</h2>
          <p>Please try after sometime</p>
        </div>
      );
    }
    return <div>{note}</div>;
  }
}

export default Booked;
