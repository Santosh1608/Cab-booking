import React, { Component } from 'react';
import './Login.css';
class Login extends Component {
  render() {
    return (
      <div className='Login'>
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
        <button onClick={this.props.login}>Submit</button>
      </div>
    );
  }
}

export default Login;
