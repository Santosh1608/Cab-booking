import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './BookingCar.css';
import car from '../../assets/car.jpg';
import cab from '../../assets/cab.jpg';
class BookingCar extends Component {
  componentDidMount() {
    this.props.booking();
  }
  render() {
    return (
      <div className='cover'>
        <div class='card' style={{ width: '400px' }}>
          <img src={cab} class='card-img-top' alt='...' />
          <div class='card-body'>
            <h5 class='card-title'>Mini</h5>
            <p class='card-text'>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <p>
              <strong>pricing: </strong>30
            </p>
            <Link to='/fill_form/mini' class='btn btn-primary'>
              Confirm Booking
            </Link>
          </div>
        </div>
        <div class='card' style={{ width: '400px' }}>
          <img src={car} class='card-img-top' alt='...' />
          <div class='card-body'>
            <h5 class='card-title'>Macro</h5>
            <p class='card-text'>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <p>
              <strong>pricing: </strong>40
            </p>
            <Link to='/fill_form/macro' class='btn btn-primary'>
              Confirm Booking
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default BookingCar;
