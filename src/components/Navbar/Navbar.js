import React, { Component } from 'react';
import classes from './Navbar.module.css';
import { Link } from 'react-router-dom';
class Navbar extends Component {
  render() {
    console.log(this.props.user);
    let routes;
    if (!this.props.user) {
      routes = (
        <>
          <li>
            <Link to='/login'>Login</Link>
          </li>
          <li>
            <Link to='/signup'>SignUp</Link>
          </li>
        </>
      );
    } else {
      routes = (
        <>
          <li>
            <Link to='#'>Signed In as {this.props.user.name}</Link>
          </li>
          <li>
            <Link onClick={this.props.logout} to='/logout'>
              Logout
            </Link>
          </li>
        </>
      );
    }
    if (this.props.user && this.props.user.email == 'admin@gmail.com') {
      routes = (
        <>
          <li>
            <Link to='#'>Signed In as {this.props.user.name}</Link>
          </li>
          <li>
            <Link onClick={this.props.logout} to='/logout'>
              Logout
            </Link>
          </li>
          <li>
            <Link to='/admin/dashboard'>Dashboard</Link>
          </li>
        </>
      );
    }
    return (
      <nav className={classes.Nav}>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          {routes}
          <li>
            <Link to='#'>About</Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
