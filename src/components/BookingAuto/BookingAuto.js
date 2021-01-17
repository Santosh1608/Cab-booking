import React, { Component } from 'react';
import './BookingAuto.css';
import auto from '../../assets/auto.png';
import { Link } from 'react-router-dom';
class BookingAuto extends Component {
  componentDidMount() {
    this.props.booking();
  }
  render() {
    return (
      <div class='coverAuto'>
        <div class='card' style={{ width: '30%' }}>
          <img src={auto} class='card-img-top' alt='...' />
          <div class='card-body'>
            <h5 class='card-title'>Auto</h5>
            <p class='card-text'>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <p>
              <strong>pricing: </strong>10
            </p>
            <Link to='/fill_form/auto' class='btn btn-primary'>
              Confirm Booking
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default BookingAuto;
