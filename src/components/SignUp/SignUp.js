import React, { Component } from 'react';
import '../Login/Login.css';
class SignUp extends Component {
  render() {
    return (
      <div className='Login'>
        <div className='mb-3 row'>
          <label className='col-sm-2 col-form-label'>Name</label>
          <div className='col-sm-10'>
            <input
              type='text'
              className='form-control'
              id='staticEmail'
              name='name'
              value={this.props.name}
              onChange={this.props.changed}
            />
          </div>
        </div>
        <div className='mb-3 row'>
          <label className='col-sm-2 col-form-label'>Email</label>
          <div className='col-sm-10'>
            <input
              type='text'
              className='form-control'
              id='staticEmail'
              value={this.props.email}
              onChange={this.props.changed}
              name='email'
            />
          </div>
        </div>
        <div className='mb-3 row'>
          <label className='col-sm-2 col-form-label'>Password</label>
          <div className='col-sm-10'>
            <input
              type='password'
              className='form-control'
              value={this.props.password}
              onChange={this.props.changed}
              name='password'
            />
          </div>
        </div>
        <button onClick={(e) => this.props.signUp(e)}>Submit</button>
      </div>
    );
  }
}

export default SignUp;
