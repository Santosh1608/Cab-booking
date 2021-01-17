import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
class Form extends Component {
  render() {
    if (this.props.confirmation.status) {
      return (
        <Redirect
          to={`/Booked/${this.props.distance}/${this.props.confirmation.available}`}
        />
      );
    }
    console.log(this.props);
    return (
      <form
        onSubmit={(e) => this.props.booked(e, this.props.match.params.type)}
        style={{ maxWidth: '60%', margin: 'auto', marginTop: '3rem' }}
      >
        <div class='row mb-3'>
          <label for='inputEmail3' class='col-sm-2 col-form-label'>
            Customer Name
          </label>
          <div class='col-sm-10'>
            <input
              type='name'
              class='form-control'
              id='inputEmail3'
              name='cname'
              onChange={this.props.changed}
            />
          </div>
        </div>
        <div class='row mb-3'>
          <label for='inputEmail3' class='col-sm-2 col-form-label'>
            Email
          </label>
          <div class='col-sm-10'>
            <input
              type='email'
              class='form-control'
              id='inputEmail3'
              name='cemail'
              onChange={this.props.changed}
            />
          </div>
        </div>
        <div class='row mb-3'>
          <label for='inputEmail3' class='col-sm-2 col-form-label'>
            Phone Number
          </label>
          <div class='col-sm-10'>
            <input
              type='number'
              class='form-control'
              id='inputEmail3'
              name='cmobile'
              onChange={this.props.changed}
            />
          </div>
        </div>
        <div class='row mb-3'>
          <label for='inputEmail3' class='col-sm-2 col-form-label'>
            Source
          </label>
          <div class='col-sm-10'>
            <input
              type='text'
              class='form-control'
              id='inputEmail3'
              name='csource'
              onChange={this.props.changed}
            />
          </div>
        </div>
        <div class='row mb-3'>
          <label for='inputEmail3' class='col-sm-2 col-form-label'>
            Destination
          </label>
          <div class='col-sm-10'>
            <input
              type='text'
              class='form-control'
              id='inputEmail3'
              name='cdestination'
              onChange={this.props.changed}
            />
          </div>
        </div>
        <div class='row mb-3'>
          <label for='inputEmail3' class='col-sm-2 col-form-label'>
            Expected range (km)
          </label>
          <div class='col-sm-10'>
            <input
              type='text'
              class='form-control'
              id='inputEmail3'
              name='cdistance'
              onChange={this.props.changed}
            />
          </div>
        </div>

        <button type='submit' class='btn btn-primary'>
          Book Now
        </button>
      </form>
    );
  }
}

export default Form;
