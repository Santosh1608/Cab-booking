import React, { Component } from 'react';
import classes from './Booking.module.css';
import auto from '../../../assets/auto.png';
import car from '../../../assets/car.jpg';
class Booking extends Component {
  bookingAuto = () => {
    this.props.history.push('/booking_auto');
  };
  bookingCar = () => {
    this.props.history.push('/booking_car');
  };
  render() {
    return (
      <div className={classes.Main}>
        <div className={classes.Top}>
          <img src={auto} alt='' />
          <p>Auto</p>
          <button onClick={this.bookingAuto}>Book Now</button>
        </div>
        <div className={classes.Top}>
          <img src={car} alt='' />
          <p>Car</p>
          <button onClick={this.bookingCar}>Book Now</button>
        </div>
      </div>
    );
  }
}

export default Booking;
